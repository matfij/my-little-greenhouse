import { Box, Typography, useTheme } from '@mui/material';
import {
    ChartContainer,
    ChartsAxisHighlight,
    ChartsTooltip,
    ChartsXAxis,
    ChartsYAxis,
    LineHighlightPlot,
    LinePlot,
    type AllSeriesType,
    type XAxis,
    type YAxis,
} from '@mui/x-charts';
import { useTranslation } from 'react-i18next';

const length = 50;

export const TemperatureHumidityChart = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    const time = Array.from({ length }, (_, index) => index);
    const temperature = Array.from({ length }, () => 10 * Math.random() + 15);
    const humidity = Array.from({ length }, () => 60 * Math.random() + 25);

    const xAxis: XAxis[] = [
        {
            id: 'time',
            data: time,
            scaleType: 'linear',
            height: 40,
        },
    ];

    const yAxis: YAxis[] = [
        {
            id: 'temperature',
            scaleType: 'linear',
            position: 'left',
            valueFormatter: (value) => `${value} ${t('units.celsius')}`,
            width: 65,
            min: 0,
            max: 50,
        },
        {
            id: 'humidity',
            scaleType: 'linear',
            position: 'right',
            valueFormatter: (value) => `${value} ${t('units.percent')}`,
            width: 65,
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

    return (
        <Box
            sx={{
                width: '100%',
                height: '25rem',
                padding: '1rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                background: theme.palette.background.default,
            }}>
            <Typography variant="h4">{t('domain.temperatureHumidityTitle')}</Typography>
            <ChartContainer series={series} xAxis={xAxis} yAxis={yAxis}>
                <LinePlot />
                <ChartsXAxis axisId="time" label={t('data.time')} tickLabelStyle={{ fontSize: 10 }} />
                <ChartsYAxis axisId="temperature" label={t('data.temperature')} />
                <ChartsYAxis axisId="humidity" label={t('data.humidity')} />
                <ChartsAxisHighlight x="line" />
                <LineHighlightPlot />
                <ChartsTooltip />
            </ChartContainer>
        </Box>
    );
};
