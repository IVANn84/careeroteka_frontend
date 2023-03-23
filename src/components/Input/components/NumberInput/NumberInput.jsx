import React, {useRef} from 'react';
import {MagnifyingGlassIcon, XMarkIcon} from '@heroicons/react/24/solid';

/**
 * Числовой Input. Оставляет в строке только числа
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом, Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {String?} placeholder - Плейсхолдер
 * @param {Boolean} hasAutoFocus - Авто-фокус
 * @param {Number?} maxLength - Максимальная длина числа
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {Boolean} isRequired - Обязательное поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
 * @param {Object} classes
 * @returns {JSX.Element}
 */
export default function NumberInput({
    value,
    isClearable,
    isSearchable,
    isDisabled,
    error,
    placeholder,
    hasAutoFocus,
    maxLength,
    isDisplayed = true,
    className,
    
    onChange,
    onSubmit,
    onClear,
    
    classes,
}) {
    if (!isDisplayed) {
        return null;
    }
    
    const $input = useRef(null);
    
    const toNumber = variable => {
        if (typeof variable === 'number') {
            return variable;
        } else if (typeof variable === 'string') {
            return variable.replace(/[^0-9]/g, '');
        } else {
            return '';
        }
    };
    
    const change = ({target: {value: newValue}}) => {
        if (isDisabled || !onChange || toNumber(newValue) === value) {
            return;
        }
        
        onChange(toNumber(newValue));
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
    
    return (
        <div className={`${classes.container} ${className || ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.input}>
                    <input
                        ref={$input}
                        type='text'
                        spellCheck='false'
                        autoCorrect='off'
                        autoComplete='off'
                        disabled={isDisabled}
                        value={toNumber(value)}
                        onKeyDown={submit}
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
                    {isSearchable && (
                        <MagnifyingGlassIcon
                            tabIndex={0}
                            onKeyDown={onKeyDown(search)}
                            onClick={search}/>
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