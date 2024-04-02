using CityInfo.API.Services;
using Microsoft.AspNetCore.StaticFiles;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/cityinfo.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();


//method provided by ASP.NET Core for building web applications, including Web APIs.
var builder = WebApplication.CreateBuilder(args);
// builder.Logging.ClearProviders();
// builder.Logging.AddConsole();
builder.Host.UseSerilog();
// Add services to the container.

builder.Services.AddControllers(options =>
{
    options.ReturnHttpNotAcceptable = true;
}).AddNewtonsoftJson()
.AddXmlDataContractSerializerFormatters();

//----------------Adding custom problem details info -----------------------------------------
builder.Services.AddProblemDetails();
// builder.Services.AddProblemDetails(options =>
// {
//     options.CustomizeProblemDetails = ctx =>
//     {
//         ctx.ProblemDetails.Extensions.Add("Additional Info", "Additional info example");
//         ctx.ProblemDetails.Extensions.Add("Server", Environment.MachineName);
//     };
// });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<FileExtensionContentTypeProvider>();
//Using Custom Service
builder.Services.AddTransient<LocalMailService>();

var app = builder.Build();

//All types of info regarding environment 

var env = app.Environment.EnvironmentName;
var appName = app.Environment.ApplicationName;

// Configure the HTTP request pipeline.

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();
}


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
// Endpoint Routing
app.UseRouting();

app.UseAuthorization();

app.UseEndpoints((endpoints) =>
{
    endpoints.MapControllers();
});

// app.Run(async (context) =>
// {
//     await context.Response.WriteAsync($"Current Environment is {env} and Application name is {appName}");
// });


app.Run();
