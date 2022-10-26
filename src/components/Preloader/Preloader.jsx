import React from 'react';

/**
 * Прелоадер
 * @param {JSX.Element} children
 * @param {Boolean} isDisplayed - Отображается ли
 * @param {Boolean} isAbsolute - Абсолютное ли позиционирование
 * @param {Object} classes - Классы со стилями
 * @returns {JSX.Element | null}
 */
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