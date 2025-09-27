import { useTheme } from '@mui/material';
import type { AllSeriesType, XAxis, YAxis } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GreenHouseApiClient } from '../api/greenhouse-api-client';

const formatTimeHHMM = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export const useTemperatureHumidity = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const [time, setTime] = useState<number[]>([]);
    const [temperature, setTemperature] = useState<number[]>([]);
    const [humidity, setHumidity] = useState<number[]>([]);

    useEffect(() => {
        void fetchData();
    }, []);

    const fetchData = async () => {
        const temperatureAggregate = await GreenHouseApiClient.getSensorData('temperature');
        const humidityAggregate = await GreenHouseApiClient.getSensorData('humidity');
        setTime(temperatureAggregate.timestamps);
        setTemperature(temperatureAggregate.values);
        setHumidity(humidityAggregate.values);
    };

    const xAxis: XAxis[] = [
        {
            id: 'time',
            data: time,
            scaleType: 'utc',
            height: 50,
            valueFormatter: (value) => formatTimeHHMM(new Date(value)),
            min: Math.min(...time),
            max: Math.max(...time),
        },
    ];

    const yAxis: YAxis[] = [
        {
            id: 'temperature',
            scaleType: 'linear',
            position: 'left',
            width: 70,
            min: 0,
            max: 50,
        },
        {
            id: 'humidity',
            scaleType: 'linear',
            position: 'right',
            width: 70,
            min: 0,
            max: 100,
        },
    ];

    const series: AllSeriesType[] = [
        {
            type: 'line',
            label: t('data.temperature'),
            data: temperature,
            color: theme.palette.earth?.clay,
            xAxisId: 'time',
            yAxisId: 'temperature',
        },
        {
            type: 'line',
            label: t('data.humidity'),
            data: humidity,
            color: theme.palette.earth?.moss,
            xAxisId: 'time',
            yAxisId: 'humidity',
        },
    ];

    return { xAxis, yAxis, series };
};
