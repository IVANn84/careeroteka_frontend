/* eslint-disable react/no-danger */
import React, { useMemo, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';

/**
 * Большой текстовый инпут
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом,
 * Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {Boolean} isPlaceholderAtTop - Отображать плейсхолдер над инпутом
 * @param {String?} placeholder - Плейсхолдер
 * @param {Number?} maxLength - Максимальная длина значения
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {Boolean} isRequired - Обязательное поле
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
 * @param {Object} classes
 * @returns {JSX.Element}
 */
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
}) {
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
