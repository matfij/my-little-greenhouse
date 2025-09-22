import { Box, Typography, useTheme } from '@mui/material';
import {
    ChartContainer,
    ChartsAxisHighlight,
    ChartsTooltip,
    ChartsXAxis,
    ChartsYAxis,
    LineHighlightPlot,
    LinePlot,
} from '@mui/x-charts';
import { useTranslation } from 'react-i18next';
import { useTemperatureHumidity } from './use-temperature-humidity';

export const TemperatureHumidityChart = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    const { xAxis, yAxis, series } = useTemperatureHumidity();

    return (
        <Box
            sx={{
                width: '100%',
                height: '25rem',
                paddingTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                background: theme.palette.background.default,
            }}>
            <Typography variant="h4">{t('domain.temperatureHumidityTitle')}</Typography>
            <ChartContainer series={series} xAxis={xAxis} yAxis={yAxis}>
                <LinePlot />
                <ChartsXAxis axisId="time" label={t('data.time')} tickLabelStyle={{ fontSize: 10 }} />
                <ChartsYAxis
                    axisId="temperature"
                    label={`${t('data.temperature')} [${t('units.celsius')}]`}
                />
                <ChartsYAxis axisId="humidity" label={`${t('data.humidity')} [${t('units.percent')}]`} />
                <ChartsAxisHighlight x="line" />
                <LineHighlightPlot />
                <ChartsTooltip />
            </ChartContainer>
        </Box>
    );
};
