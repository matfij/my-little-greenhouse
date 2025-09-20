import './i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppComponent } from './app-component';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AppComponent />
    </StrictMode>,
);
