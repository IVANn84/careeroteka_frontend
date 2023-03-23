import React from 'react';
import {ChevronDownIcon} from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';

export default function Value({
    selectedValue,
    placeholder,
    isDisabled,
    isRequired,
    
    toggle,
    
    classes,
}) {
    const onClick = () => {
        !isDisabled && toggle?.();
    };
    
    const onKeyDown = ({key}) => {
        if (key === 'Enter') {
            onClick();
        }
    };
    
    return (
        <div
            className={classes.container}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onClick={onClick}>
            <Typography
                variant='B1'
                variantMobile='B2'>
                {selectedValue || placeholder}
                {!selectedValue && isRequired && <span className={classes.requireStar}>*</span>}
            </Typography>
            <ChevronDownIcon
                className={classes.button}
                width={24}
                height={24}/>
        </div>
    );

}
