import React, {useRef, useState} from 'react';
import accounting from 'accounting-big';
import {MagnifyingGlassIcon, XMarkIcon} from '@heroicons/react/24/solid';
import {correctToString} from 'Util/bigMath';

/** Денежный формат Input. Умеет подстраивать шаблон под нужное количество разрядов числа и после запятой*/

/**
 * Денежный формат Input. Умеет подстраивать шаблон под нужное количество разрядов числа и после запятой
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом, Boolean - только подсветит)
 * @param {Boolean} hasNegative - Можно ли вводить отрицательные числа
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {String?} placeholder - Плейсхолдер
 * @param {Number?} intDigit - Максимальное кол-во цифр до запятой
 * @param {Number?} precision - Максимальное кол-во цифр после запятой
 * @param {Boolean} hasAutoFocus - Авто-фокус
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Object} classes
 * @returns {JSX.Element}
 */
export default function MoneyInput({
    isDisabled,
    value,
    error,
    placeholder,
    hasNegative,
    isClearable,
    isSearchable,
    intDigit = 12,
    precision = 2,
    hasAutoFocus,
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
    
    const [selection, setSelection] = useState({
        selectionStart: 0,
        selectionEnd: 0,
    });
    
    const formattedValue = value => {
        if ([null, undefined].includes(value)) {
            return '';
        }
        
        return accounting.formatMoney(value, {
            symbol: '',
            precision: precision,
            thousand: ' ',
            decimal: ',',
        });
        
    };
    
    const correctUnformat = (value, separator) => {
        const unformat = accounting.unformatBig(value, separator);
        //Корректная обработка Big чисел формата value * -e^10 и вывод их в виде строки
        return correctToString(unformat);
    };
    
    const preventNumberShift = (
        {
            preventDefault,
            target: {
                value,
                selectionStart,
                selectionEnd,
            },
            keyCode,
        },
    ) => {
        const isBackspace = keyCode === 8;
        const isDelete = keyCode === 46;
        const isEnter = keyCode === 13;
        
        if (isEnter && !isDisabled && onSubmit) {
            return onSubmit(value);
        }
        
        if (!value || !(isBackspace || isDelete)) {
            return;
        }
        
        const fractionSeparatorIndex = value.indexOf(',');
        const beforeSelectionEnd = selectionEnd - 1;
        const beforeSelectionStart = selectionStart - 1;
        
        if ((beforeSelectionEnd > fractionSeparatorIndex) && (selectionStart === fractionSeparatorIndex)) {
            return setSelection({
                ...selection,
                selectionStart: selectionStart + 1,
            });
            
        }
        
        if ((selectionStart < fractionSeparatorIndex) && (beforeSelectionEnd === fractionSeparatorIndex)) {
            return setSelection({
                ...selection,
                selectionEnd: selectionEnd - 1,
            });
        }
        
        if ((beforeSelectionEnd === fractionSeparatorIndex) && (selectionStart === fractionSeparatorIndex)) {
            preventDefault();
            return setSelection({
                ...selection,
                selectionEnd: selectionEnd - 1,
            });
        }
        
        if (selectionStart === selectionEnd) {
            if ((selectionStart === fractionSeparatorIndex) && isDelete) {
                return setSelection({
                    selectionStart: selectionStart + 1,
                    selectionEnd: selectionEnd + 1,
                });
            } else if ((beforeSelectionStart === fractionSeparatorIndex) && isBackspace) {
                return setSelection({
                    selectionStart: selectionStart - 1,
                    selectionEnd: selectionEnd - 1,
                });
            }
        }
    };
    
    const change = ({
        target: {value, selectionStart},
        nativeEvent: {data},
    }) => {
        // Выкидываем при попытке ввода не числового символа
        if (isDisabled || data && /\D/i.test(data) || !onChange) {
            return;
        }
        
        // При получении value оно не форматировано в денежный вид, а также могут возникать лишние нули. Форматируя в "число" и обратно в денежный формат решаем все эти проблемы.
        const valueWithSeparator = formattedValue(correctUnformat(value, ','));
        
        const trimSuperfluousDigits = () => {
            const [integerPart, decimalPart] = value.split(',');
            
            const integerSeparatorCount = (integerPart?.match(/\s/g) || []).length;
            
            const limitedInteger = integerPart?.replace(/\s/g, '').length > intDigit
                ? integerPart.slice(0, intDigit + integerSeparatorCount)
                : integerPart;
            
            const limitedDecimal = decimalPart?.length > precision
                ? decimalPart.slice(0, precision)
                : decimalPart;
            
            return `${limitedInteger}.${limitedDecimal}`;
        };
        
        const getCursor = () => {
            const valueBeforeCursor = correctUnformat(trimSuperfluousDigits().slice(0, selectionStart));
            
            const currentPosition = valueBeforeCursor !== '0'
                ? valueBeforeCursor.length
                : 0;
            
            const separatorCountBeforeCursor = (valueWithSeparator.slice(0, currentPosition + Math.floor(currentPosition / 3))
                .match(/\s/g) || []).length;
            return separatorCountBeforeCursor + currentPosition;
        };
        
        const cursorPosition = getCursor();
        
        setSelection({
            selectionStart: cursorPosition,
            selectionEnd: cursorPosition,
        });
        
        const correctValue = () => {
            const value = correctUnformat(trimSuperfluousDigits());
            if (!hasNegative && /^-/.test(value)) {
                return value.slice(1);
            } else {
                return value;
            }
        };
        
        // Если количество знаков после запятой больше двух, возвращаем строку и если наоборот, то число
        if ((correctValue().split('.')[1]?.length) > 2) {
            onChange(correctValue());
        } else {
            onChange(parseFloat(correctValue()));
        }
    };
    
    const setSelectionToDOM = $element => {
        if ($element) {
            $element.setSelectionRange(selection.selectionStart, selection.selectionEnd);
        }
        if ($input) {
            $input.current = $element;
        }
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
    
    return (
        <div className={`${classes.container} ${className || ''}`}>
            <div className={classes.input}>
                <input
                    ref={setSelectionToDOM}
                    type="text"
                    spellCheck="false"
                    disabled={isDisabled}
                    placeholder={placeholder}
                    value={formattedValue(value)}
                    onKeyDown={preventNumberShift}
                    onChange={change}
                    autoFocus={hasAutoFocus}/>
                <div className={classes.actions}>
                    {value !== null && isClearable && !isDisabled && (
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
