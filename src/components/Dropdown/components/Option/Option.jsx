import React from 'react';

export default function Option({
    value,
    
    onSelect,
    
    classes,
}) {
    return (
        <div
            className={classes.container}
            onClick={onSelect}>
            {value}
        </div>
    );
}