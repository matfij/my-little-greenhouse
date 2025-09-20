import { useTranslation } from 'react-i18next';

export const AppComponent = () => {
    const { t } = useTranslation();

    return <h1>{t('domain.title')}</h1>;
};
