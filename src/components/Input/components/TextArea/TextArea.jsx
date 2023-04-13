import React, {useMemo, useRef} from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';

/**
 * Большой текстовый инпут
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом, Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {String?} placeholder - Плейсхолдер
 * @param {Boolean} hasAutoFocus - Авто-фокус
 * @param {Number?} maxLength - Максимальная длина значения
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {Boolean} isRequired - Обязательное поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
 * @param {Object} classes
 * @returns {JSX.Element}
 */
export default function TextArea({
    isDisabled,
    value,
    error,
    isClearable,
    placeholder,
    hasAutoFocus,
    maxLength,
    isDisplayed = true,
    className,
    
    onChange,
    onClear,
    
    classes,
}) {
    if (!isDisplayed) {
        return null;
    }
    
    const $container = useRef(null);
    const $input = useRef(null);
    
    const change = ({target: {value}}) => {
        if (isDisabled || !onChange) {
            return;
        }
        
        onChange(value.trimStart());
    };
    
    const clear = () => {
        if (isDisabled) {
            return;
        }
        
        onChange?.(null);
        $input.current.focus();
        onClear?.();
    };
    
    const onKeyDown = fn => ({key}) => {
        if (key === 'Enter') {
            fn();
        }
    };
    
    const normalizedValue = useMemo(() =>
        [null, undefined].includes(value)
            ? ''
            : value
    , [value]);
    
    return (
        <div
            ref={$container}
            className={`${classes.container} ${className || ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.textarea}>
                    <textarea
                        ref={$input}
                        spellCheck='false'
                        autoCorrect='off'
                        autoComplete='off'
                        disabled={isDisabled}
                        value={normalizedValue}
                        onChange={change}
                        autoFocus={hasAutoFocus}
                        maxLength={maxLength}/>
                    {placeholder && (
                        <span className={classes.placeholder}>{placeholder}</span>
                    )}
                </div>
                <div className={classes.actions}>
                    {isClearable && !isDisabled && value && (
                        <XMarkIcon
                            tabIndex={0}
                            onKeyDown={onKeyDown(clear)}
                            onClick={clear}/>
                    )}
                </div>
            </div>
            {error && typeof error === 'string' &&
                <div
                    className={classes.error}
                    dangerouslySetInnerHTML={{__html: error}}/>
            }
        </div>
    );
}