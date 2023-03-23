import React from 'react';

import Typography from 'Component/Typography';

export default function Option({
    value,
    
    onSelect,
    
    classes,
}) {
    const onKeyDown = ({key}) => {
        if (key === 'Enter') {
            onSelect?.();
        }
    };
    
    return (
        <div
            className={classes.container}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onClick={onSelect}>
            <Typography
                variant='B1'
                variantMobile='B2'>
                {value}
            </Typography>
        </div>
    );
}