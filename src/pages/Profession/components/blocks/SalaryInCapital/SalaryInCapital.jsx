import React from 'react';
import accounting from 'accounting-big';

import {useStoreProfessionPage} from 'Page/Profession/stores';

import {getCountDecimal} from 'Util/getCountDecimal';

import Block from 'Component/Block';
import BarChart from 'Component/BarChart';
import Typography from 'Component/Typography';
import BarChartSkeleton from './components/BarChartSkeleton';

export default function SalaryInCapital({
    classes,
}) {
    const {
        entityStore,
    } = useStoreProfessionPage();
    
    const formatMoney = value => accounting.formatMoney(value, {
        symbol: '%',
        format: {
            pos: '+%v%s',
            neg: '-%v%s',
            zero: '%v%s',
        },
        decimal: ',',
        precision: getCountDecimal(entityStore.entity?.statistic?.percentInCapital)
            ? 1
            : 0,
    });
    
    const data = {
        labels: entityStore.entity?.statistic?.inCapital?.map(({month}) => month) || [],
        datasets: [
            {
                data: entityStore.entity?.statistic?.inCapital?.map(({salary}) => salary) || [],
                backgroundColor: '#9A00E2',
            },
        ],
    };
    
    return (
        <Block
            isSlim
            className={classes.container}>
            <div className={classes.header}>
                <Typography
                    variant='H3'
                    variantMobile='H5'
                    component='h2'>
                    Зарплата в столице
                </Typography>
                {!entityStore.isLoadingStatistic && (
                    <Typography
                        variant='H3'
                        variantMobile='B1'
                        weightMobile='semiBold'
                        className={entityStore.entity?.statistic?.percentInCapital < 0 ? classes.negative : classes.positive}>
                        {formatMoney(entityStore.entity?.statistic?.percentInCapital)}
                    </Typography>
                )}
            </div>
            <div>
                <BarChartSkeleton isDisplayed={entityStore.isLoadingStatistic}>
                    <BarChart data={data}/>
                </BarChartSkeleton>
            </div>
        </Block>
    );
}