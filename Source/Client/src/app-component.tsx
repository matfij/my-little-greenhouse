import { CssBaseline, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import theme from './theme';
import { useEffect } from 'react';
import { TemperatureHumidityChart } from './components/temperature-humidity-chart';

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
                    height: '100vh',
                    padding: '4rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '2rem',
                }}>
                <Typography variant="h2">{t('domain.title')}</Typography>
                <TemperatureHumidityChart />
            </Paper>
        </ThemeProvider>
    );
};
