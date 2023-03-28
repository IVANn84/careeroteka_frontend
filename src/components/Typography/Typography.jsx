import React from 'react';

export default function Typography({
    children,
    isDisplayed = true,
    component = 'span',
    className,
    /* eslint-disable no-unused-vars */
    variant,
    variantMobile,
    weight,
    weightMobile,
    /* eslint-enable no-unused-vars */
    
    classes,
    ...props
}) {
    return isDisplayed && React.createElement(component, {
        className: `${classes.typography} ${className || ''}`,
        ...props,
    }, children);
}