using CityInfo.API.Entities;

namespace CityInfo.API.Services
{
  public interface ICityInfoRepository
  {
    //  Task<T> indicates that the method is asynchronous.
    //  In this case, the method GetCitiesAsync() returns a Task<IEnumerable<City>>, 
    //    which means it's an asynchronous method that will eventually return an IEnumerable<City>.
    Task<IEnumerable<City>> GetCitiesAsync();
    Task<City?> GetCityAsync(int cityId, bool includeMustVisits);

    Task<IEnumerable<MustVisit>> GetMustVisitsForCityAsync(int cityId);
    Task<MustVisit?> GetMustVisitForCityAsync(int cityId, int mustVisitId);

  }
}
