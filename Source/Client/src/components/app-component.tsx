import { CssBaseline, Paper, Typography } from '@mui/material';
import { ThemeProvider, alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import theme from '../theme';
import { useEffect } from 'react';
import { TemperatureHumidityChart } from './temperature-humidity-chart';
import { IlluminanceChart } from './illuminance-chart';

export const AppComponent = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('domain.title');
    }, [t]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper
                sx={{
                    minHeight: '100vh',
                    padding: '4rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '2rem',
                    backgroundImage: `linear-gradient(${alpha(
                        theme.palette.background.default,
                        0.9,
                    )}, ${alpha(theme.palette.background.paper, 0.9)}), url(img/background.png)`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}>
                <Typography variant="h3">{t('domain.title')}</Typography>
                <TemperatureHumidityChart />
                <IlluminanceChart />
            </Paper>
        </ThemeProvider>
    );
};
