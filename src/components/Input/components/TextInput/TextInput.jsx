import React, {useMemo, useRef} from 'react';
import {XMarkIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';

/**
 * Текстовый инпут
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом, Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {String?} placeholder - Плейсхолдер
 * @param {Boolean} hasAutoFocus - Авто-фокус
 * @param {Number?} maxLength - Максимальная длина значения
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Object} classes
 * @returns {JSX.Element}
 */
export default function TextInput({
    isDisabled,
    value,
    error,
    isClearable,
    isSearchable,
    placeholder,
    hasAutoFocus,
    maxLength,
    isDisplayed = true,
    className,
    
    onChange,
    onSubmit,
    
    classes,
}) {
    if (!isDisplayed) {
        return null;
    }
    
    const $input = useRef(null);
    
    const change = ({target: {value}}) => {
        if (isDisabled || !onChange) {
            return;
        }
        
        onChange(value.trimStart());
    };
    
    const submit = ({keyCode, target: {value}}) => {
        if (isDisabled || !onSubmit || keyCode !== 13) {
            return;
        }
        
        onSubmit(value);
    };
    
    const search = () => {
        if (isDisabled || !onSubmit) {
            return;
        }
        
        onSubmit(value);
    };
    
    const clear = () => {
        if (isDisabled || !onChange) {
            return;
        }
        
        onChange(null);
        $input.current.focus();
    };
    
    const normalizedValue = useMemo(() =>
        [null, undefined].includes(value)
            ? ''
            : value
    , [value]);
    
    return (
        <div className={`${classes.container} ${className || ''}`}>
            <div className={classes.input}>
                <input
                    ref={$input}
                    type="text"
                    spellCheck="false"
                    disabled={isDisabled}
                    placeholder={placeholder}
                    value={normalizedValue}
                    onKeyDown={submit}
                    onChange={change}
                    autoFocus={hasAutoFocus}
                    maxLength={maxLength}/>
                <div className={classes.actions}>
                    {isClearable && !isDisabled && value && (
                        <XMarkIcon onClick={clear}/>
                    )}
                    {isSearchable && (
                        <MagnifyingGlassIcon onClick={search}/>
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
