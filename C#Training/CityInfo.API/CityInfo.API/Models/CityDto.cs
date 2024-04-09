namespace CityInfo.API.Models
{
    public class CityDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public string Description { get; set; }

        public int NumberOfMustVisit
        {
            get
            {
                return MustVisit.Count;
            }
        }

        public ICollection<MustVisitDto> MustVisit { get; set; }
        =new List<MustVisitDto>(); 
    }
}
