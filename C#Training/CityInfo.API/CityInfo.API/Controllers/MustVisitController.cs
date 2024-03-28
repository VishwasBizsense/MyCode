using CityInfo.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
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

        [HttpGet("{mustVisitId}")]
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
    }

}
