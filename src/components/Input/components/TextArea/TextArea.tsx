/* eslint-disable react/no-danger */
import React, { useMemo, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';

export interface TextAreaProps {
  isDisabled?: boolean;
  value?: string;
  //  Ошибка (String отобразится под инпутом, Boolean - только подсветит)
  error?: boolean | string;
  // Есть ли кнопка очищения инпута
  isClearable?: boolean;
  placeholder?: string;
  // Максимальная длина значения
  maxLength?: number;
  // Отображается ли поле
  isDisplayed?: boolean;
  // Отображать плейсхолдер над инпутом
  isPlaceholderAtTop?: boolean;
  className?: string;
  // Функция, вызывающаяся при изменении значения инпута
  onChange: (value: string) => void;
  // Функция, вызывающаяся при нажатии на кнопку очищения
  onClear?: () => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  // Обязательное поле
  isRequired?: boolean;
  type: 'textarea';
  /* eslint-enable react/no-unused-prop-types */
}

// Большой текстовый инпут
export default function TextArea({
  isDisabled,
  value,
  error,
  isClearable,
  placeholder,
  maxLength,
  isDisplayed = true,
  isPlaceholderAtTop,
  className,

  onChange,
  onClear,

  classes,
}: TextAreaProps) {
  const $container = useRef(null);
  const $input = useRef(null);

  const normalizedValue = useMemo(
    () => ([null, undefined].includes(value)
      ? ''
      : value),
    [value],
  );

  if (!isDisplayed) {
    return null;
  }

  const change = ({ target: { value: inputValue } }) => {
    if (isDisabled || !onChange) {
      return;
    }

    onChange(inputValue.trimStart());
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
    <div
      className={`${classes.container} ${className || ''}`}
      ref={$container}
    >
      {placeholder && isPlaceholderAtTop && (
        <p className={classes.placeholderAtTop}>{placeholder}</p>
      )}
      <div className={classes.wrapper}>
        <div className={classes.textarea}>
          <textarea
            autoComplete="off"
            autoCorrect="off"
            disabled={isDisabled}
            maxLength={maxLength}
            onChange={change}
            ref={$input}
            spellCheck="false"
            value={normalizedValue}
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
