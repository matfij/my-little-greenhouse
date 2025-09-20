import { createTheme, responsiveFontSizes } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        earth?: {
            clay: string;
            moss: string;
            sand: string;
            stone: string;
            bark: string;
            charcoal: string;
        };
    }
    interface PaletteOptions {
        earth?: {
            clay?: string;
            moss?: string;
            sand?: string;
            stone?: string;
            bark?: string;
            charcoal?: string;
        };
    }
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E8935C',
            light: '#F4B478',
            dark: '#D2691E',
        },
        secondary: {
            main: '#A4C369',
            light: '#B8D687',
            dark: '#8AA75B',
        },
        background: {
            default: '#1A1612',
            paper: '#242017',
        },
        text: {
            primary: '#F0E6D6',
            secondary: '#C4B59A',
        },
        error: {
            main: '#F97316',
            light: '#FB923C',
            dark: '#EA580C',
        },
        warning: {
            main: '#F59E0B',
            light: '#FBB92F',
            dark: '#D97706',
        },
        success: {
            main: '#22C55E',
            light: '#4ADE80',
            dark: '#16A34A',
        },
        info: {
            main: '#0EA5E9',
            light: '#38BDF8',
            dark: '#0284C7',
        },
        earth: {
            clay: '#D2691E',
            moss: '#9ACD32',
            sand: '#F4A460',
            stone: '#8A7F73',
            bark: '#8B4513',
            charcoal: '#36302A',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 600,
            color: '#F0E6D6',
        },
        h2: {
            fontWeight: 600,
            color: '#F0E6D6',
        },
        h3: {
            fontWeight: 500,
            color: '#F0E6D6',
        },
        body1: {
            color: '#F0E6D6',
        },
        body2: {
            color: '#C4B59A',
        },
    },
});

export default responsiveFontSizes(theme);
