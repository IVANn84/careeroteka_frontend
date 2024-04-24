/* eslint-disable react/no-danger */
import React, {
  ChangeEventHandler, useRef, useState,
} from 'react';
import accounting from 'accounting-big';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';
import { correctToString } from 'Util/bigMath';

export interface MoneyInputProps {
  isDisabled?: boolean;
  value?: string | number;
  //  Ошибка (String отобразится под инпутом, Boolean - только подсветит)
  error?: boolean | string;
  // Можно ли вводить отрицательные числа
  hasNegative?: boolean;
  // Есть ли кнопка очищения инпута
  isClearable?: boolean;
  // Есть ли кнопка поиска (вызывает onSubmit)
  isSearchable?: boolean;
  placeholder?: string;
  // Максимальное кол-во цифр до запятой
  intDigit?: number;
  // Максимальное кол-во цифр после запятой
  precision?: number;
  // Отображается ли поле
  isDisplayed?: boolean;
  // Отображать плейсхолдер над инпутом
  isPlaceholderAtTop?: boolean;
  className?: string;
  // Функция, вызывающаяся при изменении значения инпута
  onChange: (value: string | number) => void;
  // Функция, вызывающаяся при нажатии Enter или кнопки поиска
  onSubmit?: (value: string | number) => void;
  // Функция, вызывающаяся при нажатии на кнопку очищения
  onClear?: () => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  // Обязательное поле
  isRequired?: boolean;
  type: 'money';
  /* eslint-enable react/no-unused-prop-types */
}

// Денежный формат Input. Умеет подстраивать шаблон
// под нужное количество разрядов числа и после запятой
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
}: MoneyInputProps) {
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

  const correctUnformat = (valueToUnformat, separator?: string) => {
    const unformat = accounting.unformatBig(valueToUnformat, separator);
    // Корректная обработка Big чисел формата value * -e^10 и вывод их в виде строки
    return correctToString(unformat);
  };

  const preventNumberShift = ({
    preventDefault,
    target: {
      value: inputValue,
      selectionStart,
      selectionEnd,
    },
    keyCode,
  }) => {
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

  const change: ChangeEventHandler<HTMLInputElement> = ({
    target: {
      value: inputValue,
      selectionStart,
    },
    // @ts-expect-error data хранит введенный символ
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
            autoComplete="off"
            autoCorrect="off"
            disabled={isDisabled}
            onChange={change}
            onKeyDown={preventNumberShift as any}
            ref={setSelectionToDOM}
            spellCheck="false"
            type="text"
            value={formattedValue(value)}
          />
          {placeholder && !isPlaceholderAtTop && (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={classes.actions}>
          {value !== null && isClearable && !isDisabled && (
            <XMarkIcon
              onClick={clear}
              onKeyDown={onEnter(clear)}
              tabIndex={0}
            />
          )}
          {isSearchable && (
            <MagnifyingGlassIcon
              onClick={search}
              onKeyDown={onEnter(search)}
              tabIndex={0}
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
