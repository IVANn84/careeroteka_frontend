/* eslint-disable react/no-danger */
import React, { useMemo, useRef, useState } from 'react';
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';

export interface PasswordInputProps {
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
  // Функция, вызывающаяся при нажатии Enter или кнопки поиска
  onSubmit?: (value: string) => void;
  onBlur?: (event?: any) => void;
  // Функция, вызывающаяся при нажатии на кнопку очищения
  onClear?: () => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  // Обязательное поле
  isRequired?: boolean;
  type: 'password';
  /* eslint-enable react/no-unused-prop-types */
}

// Инпут пароля
export default function PasswordInput({
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
  onSubmit,
  onClear,
  onBlur,

  classes,
}: PasswordInputProps) {
  const $input = useRef(null);
  const $eyeButton = useRef(null);
  const $eyeSlashButton = useRef(null);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const submit = ({ keyCode, target: { value: inputValue } }) => {
    if (isDisabled || !onSubmit || keyCode !== 13) {
      return;
    }

    onSubmit(inputValue);
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
    if (!isDisabled) {
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <div className={`${classes.container} ${className || ''}`}>
      {placeholder && isPlaceholderAtTop && (
        <p className={classes.placeholderAtTop}>{placeholder}</p>
      )}
      <div className={classes.wrapper}>
        <div className={classes.input}>
          <input
            autoComplete="new-password"
            autoCorrect="off"
            disabled={isDisabled}
            maxLength={maxLength}
            onBlur={onBlur}
            onChange={change}
            onKeyDown={submit as any}
            ref={$input}
            spellCheck="false"
            type={isPasswordVisible ? 'text' : 'password'}
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
          {isPasswordVisible
            ? (
              <EyeSlashIcon
                onClick={togglePasswordVisibility}
                onKeyDown={onEnter(togglePasswordVisibility)}
                ref={$eyeSlashButton}
                tabIndex={0}
              />
            )
            : (
              <EyeIcon
                onClick={togglePasswordVisibility}
                onKeyDown={onEnter(togglePasswordVisibility)}
                ref={$eyeButton}
                tabIndex={0}
              />
            )}
        </div>
      </div>
      {error && typeof error === 'string'
        && (
          <div
            className={classes.error}
            // dangerouslySetInnerHTML={{ __html: error }}
          >
            {error}
          </div>
        )}
    </div>
  );
}
