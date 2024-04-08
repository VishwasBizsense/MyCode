using AutoMapper;
using CityInfo.API.Entities;
using CityInfo.API.Models;

namespace CityInfo.API.Profiles
{
    public class MustVisitProfile : Profile
    {
        public MustVisitProfile()
        {
            CreateMap<Entities.MustVisit, Models.MustVisitDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id)) // Map Id property
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name)) // Map Name property
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description)); // Map Description property

            CreateMap<Models.MustVisitCreationDto, Entities.MustVisit>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description));

            CreateMap<Models.MustVisitForUpdateDto, Entities.MustVisit>();
            CreateMap<Entities.MustVisit, Models.MustVisitForUpdateDto>();

        }
    }
}
