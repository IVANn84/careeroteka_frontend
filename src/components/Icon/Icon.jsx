import React from 'react';

import svgs from './svgs';

/**
 * Иконка
 * @param {String} name - Название
 * @param {Number} size - Размер
 * @param props
 * @returns {JSX.Element}
 */
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
