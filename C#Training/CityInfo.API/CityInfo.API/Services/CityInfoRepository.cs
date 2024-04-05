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
            return await _context.Cities.OrderBy(c => c.Id).ToListAsync();
        }
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

        // The result of the SaveChangesAsync() method call is then compared to see
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