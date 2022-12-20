import React from 'react';

export default function Preloader({
    children,
    isDisplayed,
    
    classes,
}) {
    return isDisplayed
        ? (
            <div className={classes.container}>
                <div className={classes.indicator}/>
            </div>
        )
        : (children || null);
}