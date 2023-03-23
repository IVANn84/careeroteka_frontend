import React, {useMemo, useRef, useState} from 'react';
import {XMarkIcon, EyeIcon, EyeSlashIcon} from '@heroicons/react/24/solid';

/**
 * Инпут пароля
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом, Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {String?} placeholder - Плейсхолдер
 * @param {Boolean} hasAutoFocus - Авто-фокус
 * @param {Number?} maxLength - Максимальная длина значения
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {Boolean} isRequired - Обязательное поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
 * @param {Object} classes
 * @returns {JSX.Element}
 */
export default function PasswordInput({
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
    onSubmit,
    onClear,
    
    classes,
}) {
    const $input = useRef(null);
    const $eyeButton = useRef(null);
    const $eyeSlashButton = useRef(null);
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    if (!isDisplayed) {
        return null;
    }
    
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
    
    const clear = () => {
        if (isDisabled) {
            return;
        }
        
        onChange?.(null);
        $input.current.focus();
        onClear?.();
    };
    
    const togglePasswordVisibility = () => {
        !isDisabled && setIsPasswordVisible(!isPasswordVisible);
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
        <div className={`${classes.container} ${className || ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.input}>
                    <input
                        ref={$input}
                        type={isPasswordVisible ? 'text' : 'password'}
                        spellCheck='false'
                        autoCorrect='off'
                        autoComplete='new-password'
                        disabled={isDisabled}
                        value={normalizedValue}
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
                    {isPasswordVisible
                        ? (
                            <EyeSlashIcon
                                ref={$eyeSlashButton}
                                tabIndex={0}
                                onKeyDown={onKeyDown(togglePasswordVisibility)}
                                onClick={togglePasswordVisibility}/>
                        )
                        : (
                            <EyeIcon
                                ref={$eyeButton}
                                tabIndex={0}
                                onKeyDown={onKeyDown(togglePasswordVisibility)}
                                onClick={togglePasswordVisibility}/>
                        )
                    }
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
