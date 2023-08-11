/* eslint-disable react/no-danger */
import React, { useMemo, useRef, useState } from 'react';
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { onEnter } from 'Util/onEnter';

/**
 * Инпут пароля
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом,
 * Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {String?} placeholder - Плейсхолдер
 * @param {Number?} maxLength - Максимальная длина значения
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
}) {
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
            ref={$input}
            type={isPasswordVisible ? 'text' : 'password'}
            spellCheck="false"
            autoCorrect="off"
            autoComplete="new-password"
            disabled={isDisabled}
            value={normalizedValue}
            onKeyDown={submit}
            onChange={change}
            maxLength={maxLength}
            onBlur={onBlur}
          />
          {placeholder && !isPlaceholderAtTop && (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={classes.actions}>
          {isClearable && !isDisabled && value && (
            <XMarkIcon
              tabIndex={0}
              onKeyDown={onEnter(clear)}
              onClick={clear}
            />
          )}
          {isPasswordVisible
            ? (
              <EyeSlashIcon
                ref={$eyeSlashButton}
                tabIndex={0}
                onKeyDown={onEnter(togglePasswordVisibility)}
                onClick={togglePasswordVisibility}
              />
            )
            : (
              <EyeIcon
                ref={$eyeButton}
                tabIndex={0}
                onKeyDown={onEnter(togglePasswordVisibility)}
                onClick={togglePasswordVisibility}
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
