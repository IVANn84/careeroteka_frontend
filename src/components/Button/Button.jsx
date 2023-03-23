import React from 'react';

import Typography from 'Component/Typography';

export default function Button({
    className,
    children,
    title,
    isDisabled = false,
    isDisplayed = true,
    
    onClick,
    
    classes,
}) {
    return isDisplayed && (
        <button
            className={`${classes.button} ${className || ''}`}
            title={title}
            disabled={isDisabled}
            onClick={onClick}>
            <Typography
                variant='B1'
                variantMobile='B2'
                weight='semiBold'
                weightMobile='semiBold'>
                {children}
            </Typography>
        </button>
    );
}