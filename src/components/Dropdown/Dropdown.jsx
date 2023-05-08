/* eslint-disable react/no-danger */
import React, { useState, useRef, useEffect } from 'react';

import Menu from './components/Menu';
import Value from './components/Value';

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
  isSearchable,
  isDisplayed = true,
  isRequired,
  placeholder,
  mode = 'light',

  onSelect,

  classes,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReversedY, setIsReversedY] = useState(false);
  const $domElement = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setIsOpen(false), [window.location.pathname]);

  if (!isDisplayed) {
    return null;
  }

  const toggle = async () => {
    if (!isOpen) {
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
          role="complementary"
          className={classes.cloak}
          onClick={toggle}
        />
      )}
      <Value
        isDisabled={isDisabled}
        isRequired={isRequired}
        error={error}
        selectedValue={selectedValue}
        isOpen={isOpen}
        isReversedY={isReversedY}
        placeholder={placeholder}
        mode={mode}
        toggle={toggle}
      />
      {!isDisabled && (
        <Menu
          maxHeight={maxHeight}
          isOpen={isOpen}
          spoilerSize={spoilerSize}
          isReversedY={isReversedY}
          options={options}
          selectedId={selectedId}
          checkIsSelected={checkIsSelected}
          isSearchable={isSearchable}
          toggle={toggle}
          onSelect={onSelect}
          mode={mode}
          isLoading={isLoading}
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
