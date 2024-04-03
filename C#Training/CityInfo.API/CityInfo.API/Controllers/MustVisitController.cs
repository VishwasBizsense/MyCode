using CityInfo.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.JsonPatch;
using CityInfo.API.Services;
namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/cities/{cityId}/mustVisit")]
    public class MustVisitController : ControllerBase
    {
        // This line declares a private field named _logger of type ILogger<MustVisitController>. 
        //It allows logging messages from different parts of the application, with T representing
        // the type of the class where the logger is being used.
        private readonly ILogger<MustVisitController> _logger;
        private readonly IMailService _mailService;
        private readonly CitiesDataStore _citiesDataStore;

        public MustVisitController(ILogger<MustVisitController> logger, IMailService mailService, CitiesDataStore citiesDataStore)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _mailService = mailService ?? throw new ArgumentNullException(nameof(mailService));
            _citiesDataStore = citiesDataStore ?? throw new ArgumentNullException(nameof(citiesDataStore));

        }


        [HttpGet("")]
        public ActionResult<IEnumerable<MustVisitDto>> GetMustVisit(int cityId)
        {
            // throw new Exception("Exception sample");
            try
            {
                var city = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == cityId);
                if (city == null)
                {
                    _logger.LogInformation($"City with id {cityId} wasn't found when accessing must visit objects.");
                    return NotFound();
                }
                return Ok(city.MustVisit);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception while getting mostvisited for city with id {cityId}", ex);
                return StatusCode(500, "A problem happened while handling your request.");
            }
        }

        [HttpGet("{mustVisitId}", Name = "GetSingleMustVisit")]
        public ActionResult<MustVisitDto> GetSingleMustVisit(int cityId, int mustVisitId)
        {
            var city = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                return NotFound();
            }

            // Find the point of interest
            var mustVisit = city.MustVisit.FirstOrDefault(m => m.Id == mustVisitId);
            if (mustVisit == null)
            {
                return NotFound();
            }

            return Ok(mustVisit);
        }
        [HttpPost]
        public ActionResult<MustVisitDto> CreateMustVisit(int cityId, MustVisitDto mustVisit)
        {
            // if (!ModelState.IsValid)
            // {
            //     return BadRequest();
            // }
            var city = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                return NotFound();
            }

            var maxMustVisitId = _citiesDataStore.Cities.SelectMany(c => c.MustVisit).Max(p => p.Id);

            var finalMustVisit = new MustVisitDto()
            {
                Id = maxMustVisitId + 1,
                Name = mustVisit.Name,
                Description = mustVisit.Description
            };

            city.MustVisit.Add(finalMustVisit);
            // return Ok("Done");
            return CreatedAtAction("GetSingleMustVisit", new { cityId, mustVisitId = finalMustVisit.Id }, finalMustVisit);

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
        public ActionResult UpdateMustVisit(int cityId, int mustVisitId, MustVisitForUpdateDto mustVisit)
        {
            var city = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                return NotFound();
            }
            var mustVisitFromStore = city.MustVisit.FirstOrDefault(c => c.Id == mustVisitId);
            if (mustVisitFromStore == null)
            {
                return NotFound();
            }
            mustVisitFromStore.Name = mustVisit.Name;
            mustVisitFromStore.Description = mustVisit.Description;

            return NoContent();
        }

        //Partially updating a resource using Patch
        [HttpPatch("{mustVisitId}")]
        public ActionResult PartiallyUpdateMustVisit(int cityId, int mustVisitId, JsonPatchDocument<MustVisitForUpdateDto> patchDocument)
        {
            // Retrieve the city from the data store based on the provided cityId
            var city = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                // Return a 404 Not Found response if the city is not found
                return NotFound();
            }

            // Retrieve the mustVisit item from the city's MustVisit list based on the provided mustVisitId
            var mustVisitFromStore = city.MustVisit.FirstOrDefault(c => c.Id == mustVisitId);
            if (mustVisitFromStore == null)
            {
                // Return a 404 Not Found response if the mustVisit item is not found
                return NotFound();
            }

            // Create a new MustVisitForUpdateDto object to store the changes from the patch document
            var mustVisitToPatch = new MustVisitForUpdateDto()
            {
                Name = mustVisitFromStore.Name, // Set initial Name property from the stored object
                Description = mustVisitFromStore.Description // Set initial Description property from the stored object
            };

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

            // Apply the changes from MustVisitToPatch to the stored mustVisitFromStore object
            mustVisitFromStore.Name = mustVisitToPatch.Name;
            mustVisitFromStore.Description = mustVisitToPatch.Description;

            //Concatenating changes

            // mustVisitFromStore.Name += MustVisitToPatch.Name;
            // mustVisitFromStore.Description += MustVisitToPatch.Description;

            // Return a 204 No Content response indicating that the update was successful
            return NoContent();
        }

        //deleting content from the store
        [HttpDelete("{mustVisitId}")]
        public ActionResult DeleteMustVisit(int cityId, int mustVisitId)
        {

            var city = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                // Return a 404 Not Found response if the city is not found
                return NotFound();
            }

            // Retrieve the mustVisit item from the city's MustVisit list based on the provided mustVisitId
            var mustVisitFromStore = city.MustVisit.FirstOrDefault(c => c.Id == mustVisitId);
            if (mustVisitFromStore == null)
            {
                // Return a 404 Not Found response if the mustVisit item is not found
                return NotFound();
            }

            // Remove the mustVisit item from the city's MustVisit list
            city.MustVisit.Remove(mustVisitFromStore);

            //
            _mailService.Send("A Must Visit Location Deleted.", $"A Must Visit Location {mustVisitFromStore.Name} with id {mustVisitFromStore.Id} was deleted");


            // Return a 204 No Content response indicating that the delete was successful
            return NoContent();
        }


    }

}
