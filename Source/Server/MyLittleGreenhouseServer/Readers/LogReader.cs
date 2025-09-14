using System.Globalization;

namespace MyLittleGreenhouseServer.Readers;

public interface ILogReader
{
    public LogAggregate Read(int take);
}

public class CsvLogReader(string basePath, string logDomain) : ILogReader
{
    private readonly string _basePath = Path.Join(basePath, logDomain);

    public LogAggregate Read(int take)
    {
        var timestamps = new List<long>();
        var values = new List<float>();

        var latestLogFile = Directory.GetFiles(_basePath).Order().Last();

        using var reader = new StreamReader(latestLogFile);
        string? line = string.Empty;

        while ((line = reader.ReadLine()) is not null)
        {
            var entries = line.Split(",");
            if (entries is null || entries.Length != 2)
            {
                continue;
            }
            if (long.TryParse(entries[0], out var timestamp)
                && float.TryParse(entries[1], NumberStyles.Float, CultureInfo.InvariantCulture, out var value))
            {
                timestamps.Add(timestamp);
                values.Add(value);
            }
        }

        int skip = Math.Max(0, timestamps.Count - take);

        return new()
        {
            Length = timestamps.Count - skip,
            Timestamps = timestamps.Skip(skip),
            Values = values.Skip(skip)
        };
    }
}
