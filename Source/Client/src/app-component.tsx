import { CssBaseline, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import theme from './theme';

export const AppComponent = () => {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper
                sx={{
                    height: '100vh',
                    padding: '4rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '1rem',
                }}>
                <Typography variant="h4">{t('domain.title')}</Typography>
            </Paper>
        </ThemeProvider>
    );
};
