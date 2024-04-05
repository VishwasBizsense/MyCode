using AutoMapper;
using CityInfo.API.Entities;
using CityInfo.API.Models;

namespace CityInfo.API.Profiles
{
    public class CityProfile :Profile
    {
        public CityProfile() { 
            CreateMap<Entities.City,Models.CityWithoutMustVisitsDto>();
            //CreateMap<Entities.City, Models.CityDto>();
            CreateMap<City, CityDto>()
                .ForMember(dest => dest.NumberOfMustVisit, opt => opt.MapFrom(src => src.MustVisits.Count))
                .ForMember(dest => dest.MustVisit, opt => opt.MapFrom(src => src.MustVisits));
        }
    }
}
