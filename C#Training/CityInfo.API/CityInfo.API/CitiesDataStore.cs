using CityInfo.API.Models;

namespace CityInfo.API
{
    public class CitiesDataStore
    {
        public List<CityDto> Cities { get; set; }
        //Singleton Pattern
        //The Current property in the CitiesDataStore class is created as a static instance 
        //of the CitiesDataStore class itself. 
  //      public static CitiesDataStore Current { get; } = new CitiesDataStore();

        public CitiesDataStore()
        {
            Cities = new List<CityDto>()
        {
           new CityDto()
            {
                Id = 1,
                Name = "New York City",
                Description = "The one with the big park",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Central Park",
                        Description = "The most visited urban park in the US"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Statue of Liberty",
                        Description = "A symbol of freedom and democracy"
                    }
                }
            },
            new CityDto()
            {
                Id = 2,
                Name = "Los Angeles",
                Description = "The one with Hollywood",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Hollywood Walk of Fame",
                        Description = "Iconic sidewalk with stars honoring famous celebrities"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Universal Studios Hollywood",
                        Description = "Popular film studio and theme park"
                    }
                }
            },
            new CityDto()
            {
                Id = 3,
                Name = "Chicago",
                Description = "The windy city",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Millennium Park",
                        Description = "A public park featuring the famous Cloud Gate sculpture"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Navy Pier",
                        Description = "A popular tourist destination with shops, restaurants, and attractions"
                    }
                }
            },
            new CityDto()
            {
                Id = 4,
                Name = "Houston",
                Description = "The space city",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Space Center Houston",
                        Description = "Visitor center for NASA's Johnson Space Center"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Houston Museum District",
                        Description = "A collection of museums, galleries, and cultural centers"
                    }
                }
            },
            new CityDto()
            {
                Id = 5,
                Name = "Miami",
                Description = "The sunny city",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "South Beach",
                        Description = "Famous for its beaches, nightlife, and Art Deco architecture"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Everglades National Park",
                        Description = "A vast wilderness with unique ecosystems and wildlife"
                    }
                }
            },
            new CityDto()
            {
                Id = 6,
                Name = "Seattle",
                Description = "The rainy city",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Space Needle",
                        Description = "Iconic observation tower with panoramic views of the city"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Pike Place Market",
                        Description = "Historic market with shops, restaurants, and a famous fish market"
                    }
                }
            },
            new CityDto()
            {
                Id = 7,
                Name = "Boston",
                Description = "The historic city",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Freedom Trail",
                        Description = "A walking trail that passes by 16 historic sites"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Harvard University",
                        Description = "One of the world's most prestigious universities"
                    }
                }
            },
            new CityDto()
            {
                Id = 8,
                Name = "San Francisco",
                Description = "The tech city",
                MustVisit = new List<MustVisitDto>()
                {
                    new MustVisitDto()
                    {
                        Id = 1,
                        Name = "Golden Gate Bridge",
                        Description = "An iconic suspension bridge spanning the Golden Gate strait"
                    },
                    new MustVisitDto()
                    {
                        Id = 2,
                        Name = "Alcatraz Island",
                        Description = "A historic prison turned tourist attraction"
                    }
                }
            }
        };
        }
    }

}
