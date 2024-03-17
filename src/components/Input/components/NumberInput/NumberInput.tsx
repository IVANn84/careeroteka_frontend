/* eslint-disable react/no-danger */
import React, { useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';

export interface NumberInputProps {
  isDisabled?: boolean;
  value?: string;
  //  Ошибка (String отобразится под инпутом, Boolean - только подсветит)
  error?: boolean | string;
  // Есть ли кнопка очищения инпута
  isClearable?: boolean;
  // Есть ли кнопка поиска (вызывает onSubmit)
  isSearchable?: boolean;
  placeholder?: string;
  // Максимальная длина числа
  maxLength?: number;
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
  type: 'number';
  /* eslint-enable react/no-unused-prop-types */
}

// Числовой Input. Оставляет в строке только числа
export default function NumberInput({
  value,
  isClearable,
  isSearchable,
  isPlaceholderAtTop,
  isDisabled,
  error,
  placeholder,
  maxLength,
  isDisplayed = true,
  className,

  onChange,
  onSubmit,
  onClear,

  classes,
}: NumberInputProps) {
  const $input = useRef(null);

  if (!isDisplayed) {
    return null;
  }

  const toNumber = variable => {
    if (typeof variable === 'number') {
      return variable;
    } if (typeof variable === 'string') {
      return variable.replace(/[^0-9]/g, '');
    }
    return '';
  };

  const change = ({ target: { value: newValue } }) => {
    if (isDisabled || !onChange || toNumber(newValue) === value) {
      return;
    }

    onChange(toNumber(newValue));
  };

  const submit = ({
    keyCode,
    target: { value: inputValue },
  }) => {
    if (isDisabled || !onSubmit || keyCode !== 13) {
      return;
    }

    onSubmit(inputValue);
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
            maxLength={maxLength}
            onChange={change}
            onKeyDown={submit as any}
            ref={$input}
            spellCheck="false"
            type="text"
            value={toNumber(value)}
          />
          {placeholder && !isPlaceholderAtTop && (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={classes.actions}>
          {isClearable && !isDisabled && value && (
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
