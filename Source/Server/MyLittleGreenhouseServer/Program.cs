using DotNetEnv;
using MyLittleGreenhouseServer.Readers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient",
        policy =>
        {
            policy
                .WithOrigins("*")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowClient");

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
var illuminanceReader = new CsvLogReader(logsPath, "Illuminance");

app.MapGet("/", () => "OK");

app.MapGet("/temperature", () => temperatureReader.Read(takeLogs));
app.MapGet("/humidity", () => humidityReader.Read(takeLogs));
app.MapGet("/illuminance", () => illuminanceReader.Read(takeLogs));

app.Run();
