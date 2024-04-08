using System.ComponentModel.DataAnnotations;

namespace CityInfo.API.Models
{
    public class MustVisitDto
    {
        public int? Id { get; set; }
        [Required(ErrorMessage = "Dhangese naam dal na bhai")]
        [MaxLength(50)]
        public string? Name { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? Description { get; set; }
    }
}
