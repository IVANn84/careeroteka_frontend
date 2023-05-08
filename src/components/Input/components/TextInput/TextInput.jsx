/* eslint-disable react/no-danger */
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { onEnter } from 'Util/onEnter';
import HintMenu from '../HintMenu';

/**
 * Текстовый инпут
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {String} value - Значение
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом,
 * Boolean - только подсветит)
 * @param {Boolean} isClearable - Есть ли кнопка очищения инпута
 * @param {Boolean} isSearchable - Есть ли кнопка поиска (вызывает onSubmit)
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
export default function TextInput({
  isDisabled,
  value,
  error,
  isClearable,
  isSearchable,
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

  classes,
}) {
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

  const onBlur = () => {
    setIsFocused(false);
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
      role="button"
      ref={$container}
      className={`${classes.container} ${className || ''}`}
      tabIndex={0}
      onKeyDown={onEnter(onClick)}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <div className={`${classes.wrapper} ${getWrapperClass()}`}>
        <div className={classes.input}>
          <input
            ref={$input}
            type="text"
            spellCheck="false"
            autoCorrect="off"
            autoComplete="off"
            disabled={isDisabled}
            value={normalizedValue}
            onKeyDown={submit}
            onChange={change}
            maxLength={maxLength}
          />
          {placeholder && (
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
      {hasHint && (
        <HintMenu
          isReversedY={isReversedY}
          maxHeight={hintMaxHeight}
          value={value}
          isOpen={isOpenHint}
          toggle={toggle}
          isLoading={hintIsLoading}
          placeholder={hintPlaceholder}
          onSelect={onHintSelect}
          options={hintOptions}
        />
      )}
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
