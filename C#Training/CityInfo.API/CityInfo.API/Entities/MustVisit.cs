using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CityInfo.API.Entities
{
    public class MustVisit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string? Name { get; set; }

        [MaxLength(200)]
        public string? Description { get; set; }

        // It's a navigation property, implying a relationship between the MustVisit entity and the City entity.
        //  It's decorated with [ForeignKey("CityId")], which indicates that it's a foreign key pointing
        //   to the CityId property.
        [ForeignKey("CityId")]
        public City? City { get; set; }
        //An integer property representing the foreign key to the associated city. It's not nullable and 
        // typically matches the data type of the primary key of the associated entity.
        public int CityId { get; set; }

        public MustVisit(string name) { Name = name; }
    }
}
