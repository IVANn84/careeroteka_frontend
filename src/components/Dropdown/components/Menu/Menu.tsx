import React, { useEffect, useMemo, useState } from 'react';

import { useDebouncedValue } from 'Hook/useDebouncedValue';
import Typography from 'Component/Typography';

import TextsSkeleton from './components/TextsSkeleton';
import Spoiler from '../Spoiler';
import Option from '../Option';

interface Props {
  spoilerSize?: number;
  options: any[];
  selectedId?: string | number;
  checkIsSelected?: (option: any) => boolean;
  isOpen?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  isCloseOnSelect?: boolean;
  mode: 'light' | 'primary';
  onSelect: (option: any) => void;
  toggle: () => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  maxHeight: number;
  isReversedY: boolean;
  error?: string | boolean;
  /* eslint-enable react/no-unused-prop-types */
}

export default function Menu({
  spoilerSize = 50,
  options,
  selectedId,
  checkIsSelected,
  isOpen,
  isLoading,
  isSearchable,
  isCloseOnSelect = true,
  mode,

  onSelect,
  toggle,

  classes,
}: Props) {
  useEffect(() => {
    if (isOpen) {
      const onKeyDown = ({ key }) => {
        if (key === 'Escape') {
          toggle();
        }
      };

      document.addEventListener('keydown', onKeyDown);

      return () => {
        document.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [isOpen, toggle]);

  const [search, setSearch] = useState('');

  const debouncedSearch = useDebouncedValue(search, 300);

  const optionClick = option => {
    onSelect?.(option);
    if (isCloseOnSelect) {
      toggle();
    }
  };

  const optionChildren = useMemo(() => {
    const filteredOptions = options
      .filter(({ name }) => name.toLowerCase().includes(debouncedSearch.toLowerCase()));
    return filteredOptions.length
      ? filteredOptions.map(option => (
        <Option
          isSelected={checkIsSelected
            ? checkIsSelected(option)
            : selectedId === option.id}
          key={option.id}
          onSelect={() => optionClick(option)}
          value={option.optionValue || option.name}
        />
      ))
      : (
        <Typography
          className={classes.placeholder}
          variant="B2"
          variantMobile="B2"
        >
          Ничего не найдено
        </Typography>
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, debouncedSearch, isOpen, selectedId, checkIsSelected, isLoading]);

  return isOpen && (
    <div className={classes.container}>
      <div className={classes.menu}>
        <TextsSkeleton isDisplayed={isLoading}>
          {isSearchable && (
          <div className={classes.search}>
            <input
              onChange={({ target: { value } }) => setSearch(value)}
              placeholder="Поиск"
              type="text"
              value={search}
            />
          </div>
          )}
          <div className={classes.options}>
            <Spoiler
              mode={mode}
              size={spoilerSize}
            >
              {optionChildren}
            </Spoiler>
          </div>
        </TextsSkeleton>
      </div>
    </div>
  );
}
