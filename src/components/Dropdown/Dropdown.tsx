/* eslint-disable react/no-danger */
import React, { useEffect, useRef, useState } from 'react';

import Value from './components/Value';
import Menu from './components/Menu';

interface Props {
  // Максимальная высота открывающегося списка
  maxHeight?: number;
  error?: string | boolean;
  className?: string;
  // Кол-во изначально отображающихся элементов в списке
  // (на бОльшее кол-во будет выводиться "И еще {кол-во} ...")
  spoilerSize?: number;
  // Элементы списка
  options: any[];
  // Выбранное значение
  selectedValue?: string;
  // Необязательный, если есть checkIsSelected
  selectedId?: string | number;
  // Проверка, выбран ли элемент (если нужна логика, отличная от сравнения id)
  checkIsSelected?: (option: any) => boolean;
  isDisabled?: boolean;
  isCloseOnSelect?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isDisplayed?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  mode?: 'light' | 'primary';
  onSelect: (option: any) => void;
  classes: {[className: string]: string};
}

export default function Dropdown({
  maxHeight = 300,
  error,
  spoilerSize,
  className,
  options = [],
  selectedValue,
  selectedId,
  checkIsSelected,
  isDisabled,
  isLoading = false,
  isClearable = false,
  isSearchable,
  isDisplayed = true,
  isCloseOnSelect = true,
  isRequired,
  placeholder,
  mode = 'light',

  onSelect,

  classes,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReversedY, setIsReversedY] = useState(false);
  const $domElement = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setIsOpen(false), [window.location.pathname]);

  if (!isDisplayed) {
    return null;
  }

  const toggle = async () => {
    if (!isOpen && $domElement.current) {
      const { height, top } = $domElement.current.getBoundingClientRect();
      const reversedY = (height + maxHeight + top) > window.innerHeight
        && top > (height + maxHeight);
      setIsReversedY(reversedY);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${classes.container} ${className || ''}`}
      ref={$domElement}
    >
      {!isDisabled && isOpen && (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <div
          className={classes.cloak}
          onClick={toggle}
          role="complementary"
        />
      )}
      <Value
        error={error}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isOpen={isOpen}
        isRequired={isRequired}
        isReversedY={isReversedY}
        mode={mode}
        onSelect={onSelect}
        placeholder={placeholder}
        selectedValue={selectedValue}
        toggle={toggle}
      />
      {!isDisabled && (
        <Menu
          checkIsSelected={checkIsSelected}
          isCloseOnSelect={isCloseOnSelect}
          isLoading={isLoading}
          isOpen={isOpen}
          isReversedY={isReversedY}
          isSearchable={isSearchable}
          maxHeight={maxHeight}
          mode={mode}
          onSelect={onSelect}
          options={options}
          selectedId={selectedId}
          spoilerSize={spoilerSize}
          toggle={toggle}
        />
      )}
      {error && typeof error === 'string' && (
        <div
          className={classes.error}
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
    </div>
  );
}
