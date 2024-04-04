using CityInfo.API.Entities;
using Microsoft.EntityFrameworkCore;
namespace CityInfo.API.DbContexts
{
    public class CityInfoContext : DbContext

    {
        public DbSet<City> Cities { get; set; }
        public DbSet<MustVisit> MustVisits { get; set; }
        public CityInfoContext(DbContextOptions<CityInfoContext> options) : base(options)
        {
        }
        //seeding data
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<City>().HasData(
                new City("New York City") { Id = 1, Description = "The one with the big park" },
                new City("Los Angeles") { Id = 2, Description = "The one with Hollywood" },
                new City("Chicago") { Id = 3, Description = "The windy city" },
                new City("Houston") { Id = 4, Description = "The space city" },
                new City("Miami") { Id = 5, Description = "The sunny city" },
                new City("Seattle") { Id = 6, Description = "The rainy city" },
                new City("Boston") { Id = 7, Description = "The historic city" },
                new City("San Francisco") { Id = 8, Description = "The tech city" }
            );

            modelBuilder.Entity<MustVisit>().HasData(
                // New York City must-visit places
                new MustVisit("Central Park") { Id = 1, CityId = 1, Description = "The most visited urban park in the US" },
                new MustVisit("Statue of Liberty") { Id = 2, CityId = 1, Description = "A symbol of freedom and democracy" },
                // Los Angeles must-visit places
                new MustVisit("Hollywood Walk of Fame") { Id = 3, CityId = 2, Description = "Iconic sidewalk with stars honoring famous celebrities" },
                new MustVisit("Universal Studios Hollywood") { Id = 4, CityId = 2, Description = "Popular film studio and theme park" },
                // Chicago must-visit places
                new MustVisit("Millennium Park") { Id = 5, CityId = 3, Description = "A public park featuring the famous Cloud Gate sculpture" },
                new MustVisit("Navy Pier") { Id = 6, CityId = 3, Description = "A popular tourist destination with shops, restaurants, and attractions" },
                // Houston must-visit places
                new MustVisit("Space Center Houston") { Id = 7, CityId = 4, Description = "Visitor center for NASA's Johnson Space Center" },
                new MustVisit("Houston Museum District") { Id = 8, CityId = 4, Description = "A collection of museums, galleries, and cultural centers" },
                // Miami must-visit places
                new MustVisit("South Beach") { Id = 9, CityId = 5, Description = "Famous for its beaches, nightlife, and Art Deco architecture" },
                new MustVisit("Everglades National Park") { Id = 10, CityId = 5, Description = "A vast wilderness with unique ecosystems and wildlife" },
                // Seattle must-visit places
                new MustVisit("Space Needle") { Id = 11, CityId = 6, Description = "Iconic observation tower with panoramic views of the city" },
                new MustVisit("Pike Place Market") { Id = 12, CityId = 6, Description = "Historic market with shops, restaurants, and a famous fish market" },
                // Boston must-visit places
                new MustVisit("Freedom Trail") { Id = 13, CityId = 7, Description = "A walking trail that passes by 16 historic sites" },
                new MustVisit("Harvard University") { Id = 14, CityId = 7, Description = "One of the world's most prestigious universities" },
                // San Francisco must-visit places
                new MustVisit("Golden Gate Bridge") { Id = 15, CityId = 8, Description = "An iconic suspension bridge spanning the Golden Gate strait" },
                new MustVisit("Alcatraz Island") { Id = 16, CityId = 8, Description = "A historic prison turned tourist attraction" }
            );
        }


        //This tells the context that its being connected to a sql lite database
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseSqlite("connectionString");
        //     base.OnConfiguring(optionsBuilder);
        // }

    }
}
