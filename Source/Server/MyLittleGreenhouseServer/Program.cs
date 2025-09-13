using DotNetEnv;
using Microsoft.Extensions.Configuration;
using MyLittleGreenhouseServer.Readers;

var app = WebApplication.Create();

if (!File.Exists(".env"))
{
    throw new FileNotFoundException(".env file not found");
}
Env.Load();

var logsPath = Environment.GetEnvironmentVariable("LOG_DIR_PATH") 
    ?? throw new MissingMemberException("LOG_DIR_PATH not found");
var takeLogs = app.Configuration.GetValue<int>("Pagination:TakeLogs");

ITemperatureReader temperatureReader = new CsvTemperatureReader(logsPath);

app.MapGet("/", () => "OK");

app.MapGet("/temperatureLogs", () => temperatureReader.Read(takeLogs));

app.Run();
