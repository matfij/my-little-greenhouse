using DotNetEnv;

var builder = WebApplication.CreateBuilder(args);

if (!File.Exists(".env"))
{
    throw new FileNotFoundException(".env file not found");
}
Env.Load();

var app = builder.Build();

var logsDir = Environment.GetEnvironmentVariable("LOG_DIR_PATH");

app.MapGet("/", () => "logs dir: " + logsDir);

app.Run();
