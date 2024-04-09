namespace CityInfo.API.Services
{
    public class PaginationMetadata
    {
        public int TotalitemCount { get; set; }
        public int PageSize { get; set; }
        public int TotalPageCount { get; set; }
        public int CurrentPage { get; set; }

        public PaginationMetadata(int totalItemCount, int pageSize, int currentPage)
        {
            TotalitemCount = totalItemCount;
            PageSize = pageSize;
            CurrentPage = currentPage;
            TotalPageCount = (int)Math.Ceiling(totalItemCount / (double)pageSize);
        }
    }
}
