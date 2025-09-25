using DotNetEnv;
using MyLittleGreenhouseServer.Readers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins("*")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

if (!File.Exists(".env"))
{
    throw new FileNotFoundException(".env file not found");
}
Env.Load();

var logsPath = Environment.GetEnvironmentVariable("LOG_DIR_PATH")
    ?? throw new MissingMemberException("LOG_DIR_PATH not found");
var takeLogs = app.Configuration.GetValue<int>("Pagination:TakeLogs");

var temperatureReader = new CsvLogReader(logsPath, "Temperature");
var humidityReader = new CsvLogReader(logsPath, "Humidity");
var luxReader = new CsvLogReader(logsPath, "Lux");

app.MapGet("/", () => "OK");

app.MapGet("/temperature", () => temperatureReader.Read(takeLogs));
app.MapGet("/humidity", () => humidityReader.Read(takeLogs));
app.MapGet("/lux", () => luxReader.Read(takeLogs));

app.Run();
