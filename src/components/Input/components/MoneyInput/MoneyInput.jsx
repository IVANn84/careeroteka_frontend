/* eslint-disable react/no-danger */
import React, { useRef, useState } from 'react';
import accounting from 'accounting-big';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { correctToString } from 'Util/bigMath';
import { onEnter } from 'Util/onEnter';

/**
 * Денежный формат Input. Умеет подстраивать шаблон под нужное количество разрядов числа
 * и после запятой
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом,
 * Boolean - только подсветит)
 * @param {Boolean} hasNegative - Можно ли вводить отрицательные числа
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {String?} placeholder - Плейсхолдер
 * @param {Number?} intDigit - Максимальное кол-во цифр до запятой
 * @param {Number?} precision - Максимальное кол-во цифр после запятой
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {Boolean} isPlaceholderAtTop - Отображать плейсхолдер над инпутом
 * @param {Boolean} isRequired - Обязательное поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
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
  isPlaceholderAtTop,
  intDigit = 12,
  precision = 2,
  isDisplayed = true,
  className,

  onChange,
  onSubmit,
  onClear,

  classes,
}) {
  const $input = useRef(null);

  const [selection, setSelection] = useState({
    selectionStart: 0,
    selectionEnd: 0,
  });

  if (!isDisplayed) {
    return null;
  }

  const formattedValue = valueToFormat => {
    if ([null, undefined].includes(valueToFormat)) {
      return '';
    }

    return accounting.formatMoney(valueToFormat, {
      symbol: '',
      precision,
      thousand: ' ',
      decimal: ',',
    });
  };

  const correctUnformat = (valueToUnformat, separator) => {
    const unformat = accounting.unformatBig(valueToUnformat, separator);
    // Корректная обработка Big чисел формата value * -e^10 и вывод их в виде строки
    return correctToString(unformat);
  };

  const preventNumberShift = (
    {
      preventDefault,
      target: {
        value: inputValue,
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
      return onSubmit(inputValue);
    }

    if (!inputValue || !(isBackspace || isDelete)) {
      return;
    }

    const fractionSeparatorIndex = inputValue.indexOf(',');
    const beforeSelectionEnd = selectionEnd - 1;
    const beforeSelectionStart = selectionStart - 1;

    if ((beforeSelectionEnd > fractionSeparatorIndex)
      && (selectionStart === fractionSeparatorIndex)) {
      return setSelection({
        ...selection,
        selectionStart: selectionStart + 1,
      });
    }

    if ((selectionStart < fractionSeparatorIndex)
      && (beforeSelectionEnd === fractionSeparatorIndex)) {
      return setSelection({
        ...selection,
        selectionEnd: selectionEnd - 1,
      });
    }

    if ((beforeSelectionEnd === fractionSeparatorIndex)
      && (selectionStart === fractionSeparatorIndex)) {
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
      } if ((beforeSelectionStart === fractionSeparatorIndex) && isBackspace) {
        return setSelection({
          selectionStart: selectionStart - 1,
          selectionEnd: selectionEnd - 1,
        });
      }
    }
  };

  const change = ({
    target: {
      value: inputValue,
      selectionStart,
    },
    nativeEvent: { data },
  }) => {
    // Выкидываем при попытке ввода не числового символа
    if (isDisabled || (data && /\D/i.test(data)) || !onChange) {
      return;
    }

    // При получении value оно не форматировано в денежный вид, а также могут возникать лишние нули
    // Форматируя в "число" и обратно в денежный формат решаем все эти проблемы.
    const valueWithSeparator = formattedValue(correctUnformat(inputValue, ','));

    const trimSuperfluousDigits = () => {
      const [integerPart, decimalPart] = inputValue.split(',');

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

      const separatorCountBeforeCursor = (valueWithSeparator
        .slice(0, currentPosition + Math.floor(currentPosition / 3))
        .match(/\s/g) || []).length;
      return separatorCountBeforeCursor + currentPosition;
    };

    const cursorPosition = getCursor();

    setSelection({
      selectionStart: cursorPosition,
      selectionEnd: cursorPosition,
    });

    const correctValue = () => {
      const valueToCorrect = correctUnformat(trimSuperfluousDigits());
      if (!hasNegative && /^-/.test(valueToCorrect)) {
        return valueToCorrect.slice(1);
      }
      return valueToCorrect;
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
    if (isDisabled) {
      return;
    }

    onChange?.(null);
    $input.current.focus();
    onClear?.();
  };

  return (
    <div className={`${classes.container} ${className || ''}`}>
      {placeholder && isPlaceholderAtTop && (
        <p className={classes.placeholderAtTop}>{placeholder}</p>
      )}
      <div className={classes.wrapper}>
        <div className={classes.input}>
          <input
            ref={setSelectionToDOM}
            type="text"
            spellCheck="false"
            autoCorrect="off"
            autoComplete="off"
            disabled={isDisabled}
            value={formattedValue(value)}
            onKeyDown={preventNumberShift}
            onChange={change}
          />
          {placeholder && !isPlaceholderAtTop && (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={classes.actions}>
          {value !== null && isClearable && !isDisabled && (
            <XMarkIcon
              tabIndex={0}
              onKeyDown={onEnter(clear)}
              onClick={clear}
            />
          )}
          {isSearchable && (
            <MagnifyingGlassIcon
              tabIndex={0}
              onKeyDown={onEnter(search)}
              onClick={search}
            />
          )}
        </div>
      </div>
      {error && typeof error === 'string'
        && (
          <div
            className={classes.error}
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
    </div>
  );
}
