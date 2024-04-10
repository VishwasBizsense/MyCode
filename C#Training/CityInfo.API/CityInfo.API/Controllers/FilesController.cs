using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace CityInfo.API.Controllers
{
    [Route("api/v{version:apiVersion}/files")]
    [ApiController]
    [Authorize]
    public class FilesController : ControllerBase
    {
        private readonly FileExtensionContentTypeProvider _fileExtensionContentTypeProvider;

        public FilesController(
            FileExtensionContentTypeProvider fileExtensionContentTypeProvider)
        {
            _fileExtensionContentTypeProvider = fileExtensionContentTypeProvider
                ?? throw new System.ArgumentNullException(
                    nameof(fileExtensionContentTypeProvider));
        }
        [HttpGet("{fileId}")]
        [ApiVersion(0.1, Deprecated = true)]
        public ActionResult GetFile(string fileId)
        {
            // look up the actual file, depending on the fileId...
            var pathToFile = "api.pdf";

            // check whether the file exists
            if (!System.IO.File.Exists(pathToFile))
            {
                return NotFound();
            }

            if (!_fileExtensionContentTypeProvider.TryGetContentType(
                pathToFile, out var contentType))
            {
                contentType = "application/octet-stream";
            }

            var bytes = System.IO.File.ReadAllBytes(pathToFile);
            return File(bytes, contentType, Path.GetFileName(pathToFile));
        }

        [HttpPost]
        public async Task<ActionResult> CreateFile(IFormFile file)
        {//checking whether the length of the file exceeds 20 megabytes (20 * 1024 * 1024 bytes = 20971520 bytes). 
         //Validating the input file size and type   
            if (file.Length == 0 || file.Length > 20971520 || file.ContentType != "application/pdf")
            {
                return BadRequest("No file or an invalid one has been inputted.");
            }

            // Create the file path.  Avoid using file.FileName, as an attacker can provide a
            // malicious one, including full paths or relative paths.  
            var path = Path.Combine(
                Directory.GetCurrentDirectory(),
                $"uploaded_file_{Guid.NewGuid()}.pdf");

            //Here, The FileStream class represents a stream for reading from and writing to a file on disk.
            //  In this code, a new instance of FileStream is created with the specified file path and FileMode.
            //Create mode. FileMode.Create specifies that the file should be created if it does not exist,
            // or overwritten if it does exist.
            //

            using (var stream = new FileStream(path, FileMode.Create))
            {
                //The file parameter represents the uploaded file. The CopyToAsync() method asynchronously
                // copies the contents of the uploaded file to the FileStream stream. This operation writes
                //    the content of the uploaded file to the newly created file on disk.
                await file.CopyToAsync(stream);
            }

            return Ok("Your file has been uploaded successfully.");
        }
    }
}
