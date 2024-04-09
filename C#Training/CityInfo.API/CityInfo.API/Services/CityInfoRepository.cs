using CityInfo.API.DbContexts;
using CityInfo.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace CityInfo.API.Services
{
    public class CityInfoRepository : ICityInfoRepository
    {
        private readonly CityInfoContext _context;

        public CityInfoRepository(CityInfoContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        // Retrieves all cities asynchronously and orders them by name
        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await _context.Cities.OrderBy(c => c.Name).ToListAsync();
        }


        public async Task<(IEnumerable<City>, PaginationMetadata)> GetCitiesAsync(string? name,
        string? searchQuery, int pageNumber, int pageSize)
        {
            // Check if both name and searchQuery are either null or contain only white spaces
            // if (string.IsNullOrEmpty(name)
            //     && string.IsNullOrWhiteSpace(searchQuery)
            // )
            // {
            //     // If both name and searchQuery are empty, return all cities
            //     return await GetCitiesAsync();
            // }

            // By treating collection as an IQueryable<City>, you can use LINQ query operators 
            // (e.g., Where, OrderBy, etc.) to compose queries against the _context.Cities collection.
            //   This allows you to build dynamic queries that are executed against the underlying data source
            //    (e.g., a database) when the query is materialized (e.g., when calling ToListAsync()).
            var collection = _context.Cities as IQueryable<City>;

            // If name is not null or empty, filter cities where the name matches exactly
            if (!string.IsNullOrWhiteSpace(name))
            {
                // Trim leading and trailing white spaces from name
                name = name.Trim();
                // Filter the collection to include only cities with matching names
                collection = collection.Where(c => c.Name == name);
            }

            // If searchQuery is not null or empty, filter cities where the name or description contains the search query
            if (!string.IsNullOrWhiteSpace(searchQuery))
            {
                // Trim leading and trailing white spaces from searchQuery
                searchQuery = searchQuery.Trim();
                // Filter the collection to include cities where the name or description contains the search query
                collection = collection.Where(a => a.Name.Contains(searchQuery)
                || (a.Description != null && a.Description.Contains(searchQuery))
                );
            }

            var totalItemCount = await collection.CountAsync();

            var paginationMetadata = new PaginationMetadata(totalItemCount, pageSize, pageNumber);


            // Order the collection by city name in ascending order
            var collectionToReturn = await collection
            .OrderBy(c => c.Name)
            .Skip(pageSize * (pageNumber - 1))
            .Take(pageSize)
            .ToListAsync();

            return (collectionToReturn, paginationMetadata);
        }

        //========================================================================================================


        public async Task<bool> CityExistsAsync(int cityId)
        {
            return await _context.Cities.AnyAsync(c => cityId == c.Id);
        }

        // Retrieves a city by its ID asynchronously, optionally including its associated must-visits
        public async Task<City?> GetCityAsync(int cityId, bool includeMustVisits)
        {
            if (includeMustVisits)
            {
                return await _context.Cities
                    .Include(c => c.MustVisits)
                    .Where(c => c.Id == cityId)
                    .FirstOrDefaultAsync();
            }
            return await _context.Cities.Where(c => c.Id == cityId).FirstOrDefaultAsync();
        }


        // Retrieves a specific must-visit for a city by its IDs asynchronously
        public async Task<MustVisit?> GetMustVisitForCityAsync(int cityId, int mustVisitId)
        {
            return await _context.MustVisits
                .Where(m => m.CityId == cityId && m.Id == mustVisitId)
                .FirstOrDefaultAsync();
        }

        // Retrieves all must-visits for a city by its ID asynchronously
        public async Task<IEnumerable<MustVisit>> GetMustVisitsForCityAsync(int cityId)
        {
            return await _context.MustVisits.Where(m => m.CityId == cityId).ToListAsync();
        }


        //Add MustVisit to he DB
        public async Task AddMustVisitForCityAsync(int cityId,
        MustVisit mustVisit)
        {
            var city = await GetCityAsync(cityId, false);
            if (city != null)
            {
                city.MustVisits.Add(mustVisit);
            }

        }

        public void DeleteMustVisit(MustVisit mustVisit)
        {
            _context.MustVisits.Remove(mustVisit);
        }


        public async Task<bool> CityNameMatchesCityId(string? cityName, int cityId)
        {
            return await _context.Cities.AnyAsync(c => c.Id == cityId && c.Name == cityName);
        }


        // The result of the SaveChangesAsync() method call is compared to see
        // if it's greater than or equal to zero. In Entity Framework, SaveChangesAsync()
        //  returns an integer representing the number of state entries written to the database.
        //    If this value is greater than or equal to zero, it indicates that the changes were
        // successfully saved to the database.
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }


    }
}