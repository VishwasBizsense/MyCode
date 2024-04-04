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
    }
}