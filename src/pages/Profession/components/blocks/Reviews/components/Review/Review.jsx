import React from 'react';
import {StarIcon as FilledStar} from '@heroicons/react/24/solid';
import {StarIcon as EmptyStar} from '@heroicons/react/24/outline';
import accounting from 'accounting-big';

import Typography from 'Component/Typography';

function Review({
    title,
    value,
    classes,
}) {
    const formatRate = value => accounting.formatMoney(value, {
        symbol: '',
        precision: 1,
    });
    
    return (
        <>
            <Typography
                variant='B1'
                variantMobile='B2'
                className={classes.rateTitle}>
                {title}
            </Typography>
            <span className={classes.stars}>
                {Array(Math.round(value)).fill(0)
                    .map((value, index) => (
                        <FilledStar key={index}/>
                    ))}
                {Array(5 - Math.round(value)).fill(0)
                    .map((value, index) => (
                        <EmptyStar key={index}/>
                    ))}
            </span>
            <Typography
                variant='B1'
                variantMobile='B2'
                weight='semiBold'>
                {formatRate(value)}
            </Typography>
        </>
    );
}

export default Review;