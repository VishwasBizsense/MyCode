using Asp.Versioning;
using CityInfo.API;
using CityInfo.API.DbContexts;
using CityInfo.API.Services;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
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

//======================================= Add services to the container.========================================
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Authentication:Issuer"],
            ValidAudience = builder.Configuration["Authentication:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
            Convert.FromBase64String(builder.Configuration["Authentication:SecretForKey"]))
        };
    }
    );

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MustBeFromMiami", policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireClaim("city", "Miami");
    });
});

builder.Services.AddApiVersioning(setupAction =>
{
    setupAction.ReportApiVersions = true;
    setupAction.AssumeDefaultVersionWhenUnspecified = true;
    setupAction.DefaultApiVersion = new ApiVersion(1.0);
}).AddMvc();


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
//Defines that whenever this is service is injected , a new instance of LocalMailService
//that implements IMailService
#if DEBUG //Compiler Directives tells the compiler to omit or include any piece of code depending on condition
builder.Services.AddTransient<IMailService, LocalMailService>();
#else
builder.Services.AddTransient<IMailService ,CloudMailService>();
#endif

builder.Services.AddSingleton<CitiesDataStore>();
//Registering dbcontext and choosing databasetype
// builder.Services.AddDbContext<CityInfoContext>(
//     dbContextOptions => dbContextOptions.UseSqlite(
//        "Data Source=CityInfo.db"));

builder.Services.AddDbContext<CityInfoContext>(
    dbContextOptions => dbContextOptions.UseSqlite(
        builder.Configuration["ConnectionStrings:CityInfoDBConnectionString"]));
// Console.WriteLine("connection string" +builder.Configuration["ConnectionStrings:CityInfoDBConnectionString"]);

//Injecting CityInfo contract and repository for scoped lifetime
builder.Services.AddScoped<ICityInfoRepository, CityInfoRepository>();


builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

//========================================End Of services======================================================


var app = builder.Build();

//All types of info regarding environment 

// var env = app.Environment.EnvironmentName;
// var appName = app.Environment.ApplicationName;

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

app.UseAuthentication();

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
