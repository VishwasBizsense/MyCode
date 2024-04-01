using CityInfo.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/cities/{cityId}/mustVisit")]
    public class MustVisitController : ControllerBase
    {
        [HttpGet("")]
        public ActionResult<IEnumerable<MustVisitDto>> GetMustVisit(int cityId)
        {
            var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                return NotFound();
            }
            return Ok(city.MustVisit);
        }

        [HttpGet("{mustVisitId}", Name = "GetSingleMustVisit")]
        public ActionResult<MustVisitDto> GetSingleMustVisit(int cityId, int mustVisitId)
        {
            var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == cityId);
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
            var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == cityId);
            if (city == null)
            {
                return NotFound();
            }

            var maxMustVisitId = CitiesDataStore.Current.Cities.SelectMany(c => c.MustVisit).Max(p => p.Id);

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

        [HttpPut("{mustVisitId}")]
        public ActionResult UpdateMustVisit(int cityId, int mustVisitId, MustVisitForUpdateDto mustVisit)
        {
            var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == cityId);
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
    }

}
