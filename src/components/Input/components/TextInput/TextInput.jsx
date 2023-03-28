import React, {useEffect, useMemo, useRef, useState} from 'react';
import {XMarkIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import HintMenu from '../HintMenu';

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
 * @param {Boolean} isRequired - Обязательное поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
 * @param {Number?} hintMaxHeight - Максимальная высота подсказки
 * @param {Object[]?} hintOptions - Список опций для подсказки
 * @param {String?} hintPlaceholder - Плейсхолдер для подсказки
 * @param {Boolean?} hintIsLoading - Загружается ли подсказка
 * @param {Function?} onHintSelect - Функция, вызывающаяся при выборе опции подсказки
 * @param {Boolean?} hasHint - Есть ли подсказка
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
    hintMaxHeight = 300,
    hintOptions = [],
    hintPlaceholder,
    hintIsLoading,
    onHintSelect,
    isDisplayed = true,
    hasHint = false,
    className,
    
    onChange,
    onSubmit,
    onClear,
    
    classes,
}) {
    if (!isDisplayed) {
        return null;
    }
    
    const [isFocused, setIsFocused] = useState(false);
    const [isOpenHint, setIsOpenHint] = useState(false);
    const [isReversedY, setIsReversedY] = useState(false);
    const $container = useRef(null);
    const $input = useRef(null);
    
    const onFocus = () => {
        setIsFocused(true);
    };
    
    const onBlur = () => {
        setIsFocused(false);
    };
    
    useEffect(() => {
        const {height, top} = $container.current.getBoundingClientRect();
        const reversedY = (height + hintMaxHeight + top) > window.innerHeight && top > (height + hintMaxHeight);
        setIsReversedY(reversedY);
        setIsOpenHint(isFocused);
    }, [isFocused]);
    
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
            className={`${classes.container} ${className || ''}`}
            onBlur={onBlur}
            onFocus={onFocus}>
            <div className={`${classes.wrapper} ${hasHint && isOpenHint
                ? isReversedY
                    ? classes.wrapperWithHintReversed
                    : classes.wrapperWithHint
                : ''}`}>
                <div className={classes.input}>
                    <input
                        ref={$input}
                        type='text'
                        spellCheck='false'
                        autoCorrect='off'
                        autoComplete='off'
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
                    {isSearchable && (
                        <MagnifyingGlassIcon
                            tabIndex={0}
                            onKeyDown={onKeyDown(search)}
                            onClick={search}/>
                    )}
                </div>
            </div>
            {hasHint && (
                <HintMenu
                    isReversedY={isReversedY}
                    maxHeight={hintMaxHeight}
                    value={value}
                    isOpen={isOpenHint}
                    isLoading={hintIsLoading}
                    placeholder={hintPlaceholder}
                    onSelect={onHintSelect}
                    options={hintOptions}/>
            )}
            {error && typeof error === 'string' &&
                <div
                    className={classes.error}
                    dangerouslySetInnerHTML={{__html: error}}/>
            }
        </div>
    );
}
