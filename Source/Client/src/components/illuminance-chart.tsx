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
import { useIlluminance } from './use-illuminance';

export const IlluminanceChart = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    const { xAxis, yAxis, series } = useIlluminance();

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '64rem',
                height: '25rem',
                paddingTop: '1rem',
                paddingRight: '80px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                background: theme.palette.background.default,
            }}>
            <Typography variant="h4">{t('domain.illuminanceTitle')}</Typography>
            <ChartContainer xAxis={xAxis} yAxis={yAxis} series={series}>
                <LinePlot />
                <ChartsXAxis axisId="time" label={t('data.time')} tickLabelStyle={{ fontSize: 10 }} />
                <ChartsYAxis label={`${t('data.illuminance')} [${t('units.lux')}]`} />
                <LineHighlightPlot />
                <ChartsAxisHighlight x="line" />
                <ChartsTooltip />
            </ChartContainer>
        </Box>
    );
};
