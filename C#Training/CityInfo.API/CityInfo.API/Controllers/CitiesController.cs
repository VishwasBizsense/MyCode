using System.Text.Json;
using Asp.Versioning;
using AutoMapper;
using CityInfo.API.Models;
using CityInfo.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Expressions;

namespace CityInfo.API.Controllers
{
    [ApiController]
    [Route("api/v{version:apiVersion}/cities")]
    [Authorize]
    [ApiVersion(1)]

    public class CitiesController : ControllerBase
    {
        //private readonly CitiesDataStore _citiesDataStore;
        private readonly ICityInfoRepository _cityInfoRepository;
        private readonly IMapper _mapper;

        const int maxCitiesPageSize = 20;

        public CitiesController(ICityInfoRepository cityInfoRepository, IMapper mapper)
        {
            _cityInfoRepository = cityInfoRepository ?? throw new ArgumentNullException(nameof(cityInfoRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }
        //========================================================================================================
        [HttpGet()]//this is an action to return list of cities.

        public async Task<ActionResult<IEnumerable<CityWithoutMustVisitsDto>>> GetCities(
             string? name, string? searchQuery, int pageNumber = 1, int pageSize = 10

        )
        {
            if (pageSize > maxCitiesPageSize)
            {
                pageSize = maxCitiesPageSize;
            }
            var (cityEntities, paginationMetadata) = await _cityInfoRepository
            .GetCitiesAsync(name, searchQuery, pageNumber, pageSize);
            Response.Headers.Add("X-Pagination", JsonSerializer.Serialize(paginationMetadata));


            return Ok(_mapper.Map<IEnumerable<CityWithoutMustVisitsDto>>(cityEntities));
        }


        //========================================================================================================

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
