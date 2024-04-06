using AutoMapper;
using CityInfo.API.Entities;
using CityInfo.API.Models;

namespace CityInfo.API.Profiles
{
    public class MustVisitProfile : Profile
    {
        public MustVisitProfile()
        {
            CreateMap<Models.MustVisitDto, Entities.MustVisit>();
            // CreateMap<MustVisitDto, MustVisit>()
            // .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            // .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description));
        }
    }
}
