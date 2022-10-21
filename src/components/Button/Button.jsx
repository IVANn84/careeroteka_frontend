import React from 'react';

/**
 * @param {String | JSX.Element} children - Текст или элемент внутри кнопки
 * @param {String?} title - Описание кнопки при наведении
 * @param {Boolean} isDisabled - Блокирует кнопку для нажатия
 * @param {Boolean} isDisplayed - Отображается ли кнопка
 * @param {'filled' | 'outlined'} variant=['filled'] - Вариант отображения кнопки
 * @param {'light' | 'dark'} mode=['light'] - Светлая или темная кнопка
 * @param {Function} onClick - Функция вызываемая при нажатии на кнопку
 * @returns {JSX.Element | false}
 */
export default function Button({
    children,
    title,
    isDisabled = false,
    isDisplayed = true,
    
    onClick,
    
    classes,
}) {
    return isDisplayed && (
        <button
            className={classes.button}
            title={title}
            disabled={isDisabled}
            onClick={onClick}>
            {children}
        </button>
    );
}