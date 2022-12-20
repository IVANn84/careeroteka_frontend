import React from 'react';
import {ChevronDownIcon} from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';

export default function Value({
    selectedValue,
    placeholder,
    isDisabled,
    
    toggle,
    
    classes,
}) {
    const click = () => {
        !isDisabled && toggle?.();
    };
    
    return (
        <div
            className={classes.container}
            tabIndex={0}
            onClick={click}>
            <Typography
                variant='B1'
                variantMobile='B2'>
                {selectedValue || placeholder}
            </Typography>
            <ChevronDownIcon
                className={classes.button}
                width={24}
                height={24}/>
        </div>
    );
}
