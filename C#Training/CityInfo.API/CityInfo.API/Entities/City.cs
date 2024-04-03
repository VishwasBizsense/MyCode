using CityInfo.API.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CityInfo.API.Entities
{
    public class City
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]//attribute specifies that the
//database will automatically generate unique values for this property (typically used for identity columns).

        public int? Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string? Name { get; set; }
        [MaxLength(200)]
        public string? Description { get; set; }

        public ICollection<MustVisit> MustVisits { get; set; } = new List<MustVisit>();

        public City(string name) { Name = name; }   
    }
}
