import React from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline';

import Typography from 'Component/Typography';

export default function Area({
    areaName,
    
    removeArea,
    onSelect,
    
    classes,
}) {
    return (
        <div
            className={classes.container}
            onClick={onSelect}>
            <Typography
                className={classes.title}
                variant='B1'
                variantMobile='B2'>
                {areaName}
            </Typography>
            {removeArea && (
                <XMarkIcon
                    className={classes.removeButton}
                    width={25}
                    height={25}
                    onClick={removeArea}/>
            )}
        </div>
    );
}