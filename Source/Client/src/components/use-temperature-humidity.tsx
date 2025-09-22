import { useTheme } from '@mui/material';
import type { AllSeriesType, XAxis, YAxis } from '@mui/x-charts';
import { useTranslation } from 'react-i18next';

const length = 50;
const dt = 15 * 60 * 1000;
const now = Date.now();

const formatTimeHHMM = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export const useTemperatureHumidity = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const time = Array.from({ length }, (_, index) => now + dt * index);
    const temperature = Array.from({ length }, () => 10 * Math.random() + 15);
    const humidity = Array.from({ length }, () => 60 * Math.random() + 25);

    const xAxis: XAxis[] = [
        {
            id: 'time',
            data: time,
            scaleType: 'utc',
            height: 40,
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
            width: 50,
            min: 0,
            max: 50,
        },
        {
            id: 'humidity',
            scaleType: 'linear',
            position: 'right',
            width: 50,
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
