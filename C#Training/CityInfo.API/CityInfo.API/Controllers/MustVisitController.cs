using CityInfo.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.JsonPatch;
using CityInfo.API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/cities/{cityId}/mustVisit")]
    [Authorize]
    public class MustVisitController : ControllerBase
    {
        // This line declares a private field named _logger of type ILogger<MustVisitController>. 
        //It allows logging messages from different parts of the application, with T representing
        // the type of the class where the logger is being used.
        private readonly ILogger<MustVisitController> _logger;
        private readonly IMailService _mailService;
        private readonly ICityInfoRepository _cityInfoRepository;
        private readonly IMapper _mapper;

        public MustVisitController(ILogger<MustVisitController> logger, IMailService mailService,
        ICityInfoRepository cityInfoRepository,
        IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _mailService = mailService ?? throw new ArgumentNullException(nameof(mailService));
            //_citiesDataStore = citiesDataStore ?? throw new ArgumentNullException(nameof(citiesDataStore));
            _cityInfoRepository = cityInfoRepository ?? throw new ArgumentNullException(nameof(cityInfoRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }


        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<MustVisitDto>>> GetMustVisit(int cityId)
        {

            var cityName = User.Claims.FirstOrDefault(c => c.Type == "city")?.Value;

            if (await _cityInfoRepository.CityNameMatchesCityId(cityName, cityId))
            {
                return Forbid();
            }

            if (!await _cityInfoRepository.CityExistsAsync(cityId))
            {
                _logger.LogInformation($"City with Id {cityId} was not found when accesing must visit places.");
                return NotFound();
            }
            var mustVisitForCity = await _cityInfoRepository.GetMustVisitsForCityAsync(cityId);

            //When we call _mapper.Map<IEnumerable<MustVisitDto>>(mustVisitForCity),
            //AutoMapper internally selects the appropriate mapping function based on the source (MustVisit)
            //and destination (MustVisitDto) types. Here mustVisitForCity is of type IEnumerable<MustVisit> (source).

            return Ok(_mapper.Map<IEnumerable<MustVisitDto>>(mustVisitForCity));
        }

        [HttpGet("{mustVisitId}", Name = "GetSingleMustVisit")]
        public async Task<ActionResult<MustVisitDto>> GetSingleMustVisit(int cityId, int mustVisitId)
        {
            if (!await _cityInfoRepository.CityExistsAsync(cityId))
            {
                return NotFound();
            }
            var pointOfInterest = await _cityInfoRepository.GetMustVisitForCityAsync(cityId, mustVisitId);
            return Ok(_mapper.Map<MustVisitDto>(pointOfInterest));

        }



        [HttpPost]
        public async Task<ActionResult<MustVisitDto>> CreateMustVisit(int cityId, MustVisitCreationDto
         mustVisit)
        {
            if (!await _cityInfoRepository.CityExistsAsync(cityId))
            {
                _logger.LogInformation($"City with Id {cityId} was not found when accesing must visit places.");
                return NotFound();
            }

            var finalMustVisit = _mapper.Map<Entities.MustVisit>(mustVisit);

            await _cityInfoRepository.AddMustVisitForCityAsync(cityId, finalMustVisit);

            await _cityInfoRepository.SaveChangesAsync();

            var createdMustVisitToReturn = _mapper.Map<Models.MustVisitDto>(finalMustVisit);
            // return Ok("Done");
            return CreatedAtRoute("GetSingleMustVisit",
             new { cityId = cityId, mustVisitId = createdMustVisitToReturn.Id },
              createdMustVisitToReturn);

            //CreatedAtAction (string? actionName, object? routeValues, object? value);
            // actionName
            // actionName: This is a string parameter representing the name of the action method that
            //  will handle requests for retrieving the newly created resource. It specifies the endpoint
            //   where clients can retrieve details about the newly created resource.

            // routeValues
            //This parameter is of type object, typically an anonymous object, which contains
            //  the route values required to generate the URL for the newly created resource.
            //   These route values are used to construct the URL for the Location header.

            // value
            //This parameter represents the actual value or object that is being returned
            //  as the response body. It could be the object representing the newly created
            //  resource or any other relevant data.
        }
        //Updating a resource using PUT

        [HttpPut("{mustVisitId}")]
        public async Task<ActionResult> UpdateMustVisit(int cityId, int mustVisitId, MustVisitForUpdateDto mustVisit)
        {
            if (!await _cityInfoRepository.CityExistsAsync(cityId))
            {
                _logger.LogInformation($"City with Id {cityId} was not found when accesing must visit places.");
                return NotFound();
            }

            var mustVisitEntity = await _cityInfoRepository.GetMustVisitForCityAsync(cityId, mustVisitId);
            //This special type of mapper method overrides values from destination object with source object.
            _mapper.Map(mustVisit, mustVisitEntity);
            await _cityInfoRepository.SaveChangesAsync();
            return NoContent();
        }

        //Partially updating a resource using Patch
        [HttpPatch("{mustVisitId}")]
        public async Task<ActionResult> PartiallyUpdateMustVisit(int cityId, int mustVisitId, JsonPatchDocument<MustVisitForUpdateDto> patchDocument)
        {
            if (!await _cityInfoRepository.CityExistsAsync(cityId))
            {
                _logger.LogInformation($"City with Id {cityId} was not found when accesing must visit places.");
                return NotFound();
            }

            // Retrieve the mustVisit item from the city's MustVisit list based on the provided mustVisitId
            var mustVisitEntity = await _cityInfoRepository.GetMustVisitForCityAsync(cityId, mustVisitId);
            if (mustVisitEntity == null)
            {
                // Return a 404 Not Found response if the mustVisit item is not found
                return NotFound();
            }

            var mustVisitToPatch = _mapper.Map<MustVisitForUpdateDto>(mustVisitEntity);

            // Apply the patch document operations to the mustVisitToPatch object
            patchDocument.ApplyTo(mustVisitToPatch, ModelState);

            if (!ModelState.IsValid)
            {
                // Return a 400 Bad Request response with validation errors if ModelState is invalid
                return BadRequest(ModelState);
            }


            if (!TryValidateModel(mustVisitToPatch))
            {
                return BadRequest(ModelState);
            }

            _mapper.Map(mustVisitToPatch, mustVisitEntity);
            await _cityInfoRepository.SaveChangesAsync();
            //Concatenating changes

            // mustVisitFromStore.Name += MustVisitToPatch.Name;
            // mustVisitFromStore.Description += MustVisitToPatch.Description;

            // Return a 204 No Content response indicating that the update was successful
            return NoContent();
        }

        //deleting content from the store
        [HttpDelete("{mustVisitId}")]
        public async Task<ActionResult> DeleteMustVisit(int cityId, int mustVisitId)
        {

            if (!await _cityInfoRepository.CityExistsAsync(cityId))
            {
                _logger.LogInformation($"City with Id {cityId} was not found when accesing must visit places.");
                return NotFound();
            }

            // Retrieve the mustVisit item from the city's MustVisit list based on the provided mustVisitId
            var mustVisitEntity = await _cityInfoRepository.GetMustVisitForCityAsync(cityId, mustVisitId);
            if (mustVisitEntity == null)
            {
                // Return a 404 Not Found response if the mustVisit item is not found
                return NotFound();
            }

            _cityInfoRepository.DeleteMustVisit(mustVisitEntity);
            await _cityInfoRepository.SaveChangesAsync();
            //
            _mailService.Send("A Must Visit Location Deleted.", $"A Must Visit Location {mustVisitEntity.Name} with id {mustVisitEntity.Id} was deleted");


            // Return a 204 No Content response indicating that the delete was successful
            return NoContent();
        }


    }

}
