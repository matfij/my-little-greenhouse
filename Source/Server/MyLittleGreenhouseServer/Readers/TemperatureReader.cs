using System.Globalization;

namespace MyLittleGreenhouseServer.Readers;

public interface ITemperatureReader
{
    public SensorLogs Read(int take);
}

public class CsvTemperatureReader(string basePath) : ITemperatureReader
{
    private readonly string _basePath = Path.Join(basePath, "Temperature");

    public SensorLogs Read(int take)
    {
        var timestamps = new List<long>();
        var temperatures = new List<float>();

        var latestLogFile = Directory.GetFiles(_basePath).Order().Last();

        using var reader = new StreamReader(latestLogFile);
        string? line = string.Empty;

        while ((line = reader.ReadLine()) is not null)
        {
            var entries = line?.Split(",");
            if (entries is null || entries.Length != 2)
            {
                continue;
            }
            if (long.TryParse(entries[0], out var timestamp)
                && float.TryParse(entries[1], NumberStyles.Float, CultureInfo.InvariantCulture, out var temperature))
            {
                timestamps.Add(timestamp);
                temperatures.Add(temperature);
            }
        }

        int skip = Math.Max(0, timestamps.Count - take);

        return new()
        {
            Timestamps = timestamps.Skip(skip),
            Values = temperatures.Skip(skip)
        };
    }
}
