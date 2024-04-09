using CityInfo.API.Entities;

namespace CityInfo.API.Services
{
  public interface ICityInfoRepository
  {
    //  Task<T> indicates that the method is asynchronous.
    //  In this case, the method GetCitiesAsync() returns a Task<IEnumerable<City>>, 
    //    which means it's an asynchronous method that will eventually return an IEnumerable<City>.
    Task<IEnumerable<City>> GetCitiesAsync();
    Task<(IEnumerable<City>, PaginationMetadata)> GetCitiesAsync(string? name, string? searchQuery, int pageNumber, int pageSize);
    Task<City?> GetCityAsync(int cityId, bool includeMustVisits);
    Task<bool> CityExistsAsync(int cityId);
    Task<IEnumerable<MustVisit>> GetMustVisitsForCityAsync(int cityId);
    Task<MustVisit?> GetMustVisitForCityAsync(int cityId, int mustVisitId);

    Task AddMustVisitForCityAsync(int cityId, MustVisit mustVisit);
    //is not an async method since its not and i/o methods
    void DeleteMustVisit(MustVisit mustVisit);

    Task<bool> CityNameMatchesCityId(string? cityName, int cityId);
    Task<bool> SaveChangesAsync();


  }
}
