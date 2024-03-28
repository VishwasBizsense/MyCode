//method provided by ASP.NET Core for building web applications, including Web APIs.
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//All types of info regarding environment 

var env = app.Environment.EnvironmentName;
var appName = app.Environment.ApplicationName;

// Configure the HTTP request pipeline.
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
