/* eslint-disable react/no-danger */
import React, { useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { onEnter } from 'Util/onEnter';

/**
 * Числовой Input. Оставляет в строке только числа
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом,
 * Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {String?} placeholder - Плейсхолдер
 * @param {Number?} maxLength - Максимальная длина числа
 * @param {Boolean} isDisplayed - Отображается ли поле
 * @param {Boolean} isRequired - Обязательное поле
 * @param {Boolean} isPlaceholderAtTop - Отображать плейсхолдер над инпутом
 * @param {String?} className - Класс для стилей
 * @param {Function?} onChange - Функция, вызывающаяся при изменении значения инпута
 * @param {Function?} onSubmit - Функция, вызывающаяся при нажатии Enter или кнопки поиска
 * @param {Function?} onClear - Функция, вызывающаяся при нажатии на кнопку очищения
 * @param {Object} classes
 * @returns {JSX.Element}
 */
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
}) {
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
            ref={$input}
            type="text"
            spellCheck="false"
            autoCorrect="off"
            autoComplete="off"
            disabled={isDisabled}
            value={toNumber(value)}
            onKeyDown={submit}
            onChange={change}
            maxLength={maxLength}
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
