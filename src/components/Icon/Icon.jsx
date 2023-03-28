import React from 'react';

import svgs from './svgs';

// Иконка
export default function Icon({
    name,
    size = 32,
    ...props
}) {
    return (
        <img
            src={svgs[name]}
            alt={name}
            width={size}
            height={size}
            {...props}/>
    );
}
