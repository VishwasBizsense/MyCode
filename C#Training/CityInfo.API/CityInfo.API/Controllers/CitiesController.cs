using AutoMapper;
using CityInfo.API.Models;
using CityInfo.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/cities")]
    public class CitiesController : ControllerBase
    {
        //private readonly CitiesDataStore _citiesDataStore;
        private readonly ICityInfoRepository _cityInfoRepository;
        private readonly IMapper _mapper;

        public CitiesController(ICityInfoRepository cityInfoRepository, IMapper mapper)
        {
            _cityInfoRepository = cityInfoRepository ?? throw new ArgumentNullException(nameof(cityInfoRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet()]//this is an action to return list of cities.

        public async Task<ActionResult<IEnumerable<CityWithoutMustVisitsDto>>> GetCities()
        {
            var cityEntities = await _cityInfoRepository.GetCitiesAsync();
            return Ok(_mapper.Map<IEnumerable<CityWithoutMustVisitsDto>>(cityEntities));

            // var results = new List<CityWithoutMustVisitsDto>();
            // foreach (var cityEntity in cityEntities)
            // {
            //     results.Add(new CityWithoutMustVisitsDto
            //     {
            //         Id = cityEntity.Id,
            //         Description = cityEntity.Description,
            //         Name = cityEntity.Name

            //     });
            // }

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCity(int id, bool includeMustVisits = false)
        {
            var city = await _cityInfoRepository.GetCityAsync(id, includeMustVisits);
            if (city == null)
            {
                return NotFound();
            }
            if (includeMustVisits)
            {
                return Ok(_mapper.Map<CityDto>(city));
            }
            return Ok(_mapper.Map<CityWithoutMustVisitsDto>(city));
        }
    }
}
