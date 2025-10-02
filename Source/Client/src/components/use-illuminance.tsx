import type { LineSeriesType, XAxis, YAxis } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { formatTimeHHMM } from '../common/utils';
import { useTranslation } from 'react-i18next';
import { GreenHouseApiClient } from '../api/greenhouse-api-client';
import { useTheme } from '@mui/material';

export const useIlluminance = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const [time, setTime] = useState<number[]>([]);
    const [illuminance, setIlluminance] = useState<number[]>([]);

    useEffect(() => {
        void fetchData();
    }, []);

    const fetchData = async () => {
        const illuminanceData = await GreenHouseApiClient.getSensorData('illuminance');
        setTime(illuminanceData.timestamps);
        setIlluminance(illuminanceData.values);
    };

    const xAxis: XAxis[] = [
        {
            id: 'time',
            data: time,
            scaleType: 'utc',
            height: 50,
            valueFormatter: (value) => formatTimeHHMM(new Date(value)),
            min: Math.min(...time),
            max: Math.max(...time),
        },
    ];

    const yAxis: YAxis[] = [
        {
            id: 'illuminance',
            data: illuminance,
            scaleType: 'symlog',
            width: 70,
            min: Math.min(...illuminance),
            max: Math.max(...illuminance),
        },
    ];

    const series: LineSeriesType[] = [
        {
            type: 'line',
            label: t('data.illuminance'),
            data: illuminance,
            color: theme.palette.earth?.sand,
            xAxisId: 'time',
        },
    ];

    return { xAxis, yAxis, series };
};
