/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-danger */
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';
import { HintMenuOption } from 'Component/Input/components/HintMenu/HintMenu';

import HintMenu from '../HintMenu';

/**
 * Текстовый инпут
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом,
 * Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
 * @param {Boolean} isPlaceholderAtTop - Отображать плейсхолдер над инпутом
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

export interface TextInputProps {
  isDisabled?: boolean;
  value?: string;
  //  Ошибка (String отобразится под инпутом, Boolean - только подсветит)
  error?: boolean | string;
  // Есть ли кнопка очищения инпута
  isClearable?: boolean;
  // Есть ли кнопка поиска (вызывает onSubmit)
  isSearchable?: boolean;
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
  // Функция, вызывающаяся при нажатии на кнопку очищения
  onClear?: () => void;
  onBlur?: (event?: any) => void;
  // Есть ли подсказка
  hasHint?: boolean;
  // Максимальная высота подсказки
  hintMaxHeight?: number;
  // Список опций подсказки
  hintOptions?: HintMenuOption[];
  // Плейсхолдер для подсказки
  hintPlaceholder?: string;
  // Загружается ли подсказка
  hintIsLoading?: boolean;
  // Функция, вызывающаяся при выборе опции подсказки
  onHintSelect?: (value: HintMenuOption) => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  // Обязательное поле
  isRequired?: boolean;
  type: 'text';
  /* eslint-enable react/no-unused-prop-types */
}

// Текстовый инпут
export default function TextInput({
  isDisabled,
  value,
  error,
  isClearable,
  isSearchable,
  isPlaceholderAtTop,
  placeholder,
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
  onBlur,

  classes,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpenHint, setIsOpenHint] = useState(false);
  const [isReversedY, setIsReversedY] = useState(false);
  const $container = useRef(null);
  const $input = useRef(null);

  const toggle = useCallback(() => {
    setIsOpenHint(!isOpenHint);
  }, [isOpenHint, setIsOpenHint]);

  const updateIsReversed = () => {
    const { height, top } = $container.current.getBoundingClientRect();
    const reversedY = (height + hintMaxHeight + top) > window.innerHeight
          && top > (height + hintMaxHeight);
    setIsReversedY(reversedY);
  };

  useEffect(() => {
    if (isFocused) {
      updateIsReversed();
    }
    setIsOpenHint(isFocused);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setIsOpenHint(false), [window.location.pathname]);

  const normalizedValue = useMemo(
    () => ([null, undefined].includes(value)
      ? ''
      : value),
    [value],
  );

  if (!isDisplayed) {
    return null;
  }

  const onClick = () => {
    if (!isOpenHint) {
      updateIsReversed();
      setIsOpenHint(true);
    }
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = e => {
    setIsFocused(false);
    onBlur?.(e);
  };

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

  const getWrapperClass = () => {
    if (hasHint && isOpenHint) {
      return isReversedY
        ? classes.wrapperWithHintReversed
        : classes.wrapperWithHint;
    }

    return '';
  };

  return (
    <div
      className={`${classes.container} ${className || ''}`}
      onBlur={handleBlur}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onEnter(onClick)}
      ref={$container}
      role="button"
      tabIndex={0}
    >
      {placeholder && isPlaceholderAtTop && (
        <p className={classes.placeholderAtTop}>{placeholder}</p>
      )}
      <div className={`${classes.wrapper} ${getWrapperClass()}`}>
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
          {isSearchable && (
            <MagnifyingGlassIcon
              onClick={search}
              onKeyDown={onEnter(search)}
              tabIndex={0}
            />
          )}
        </div>
      </div>
      {hasHint && (
        <HintMenu
          isLoading={hintIsLoading}
          isOpen={isOpenHint}
          isReversedY={isReversedY}
          maxHeight={hintMaxHeight}
          onSelect={onHintSelect}
          options={hintOptions}
          placeholder={hintPlaceholder}
          toggle={toggle}
          value={value}
        />
      )}
      {error && typeof error === 'string'
        && (
          <div
            className={classes.error}
          >
            {error}
          </div>
        )}
    </div>
  );
}
