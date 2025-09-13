namespace MyLittleGreenhouseServer;

public record struct SensorLogs(
    IEnumerable<long> Timestamps,
    IEnumerable<float> Values);
