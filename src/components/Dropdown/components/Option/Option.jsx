import React from 'react';

import Typography from 'Component/Typography';

export default function Option({
    value,
    
    onSelect,
    
    classes,
}) {
    return (
        <div
            className={classes.container}
            onClick={onSelect}>
            <Typography
                variant='B1'
                variantMobile='B2'>
                {value}
            </Typography>
        </div>
    );
}