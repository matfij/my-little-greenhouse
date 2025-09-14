namespace MyLittleGreenhouseServer.Readers;

public record struct LogAggregate(
    int Length,
    IEnumerable<long> Timestamps,
    IEnumerable<float> Values);
