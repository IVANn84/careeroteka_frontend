import React, { useCallback, useEffect, useMemo } from 'react';

import Typography from 'Component/Typography';
import Spoiler from 'Component/Dropdown/components/Spoiler';
import Option from 'Component/Dropdown/components/Option';
import TextsSkeleton from 'Component/Dropdown/components/Menu/components/TextsSkeleton';

export interface HintMenuOption {
  id: any;
  name?: string;
  optionValue?: React.ReactNode;
}

export interface HintsMenuProps {
  placeholder?: string;
  value?: string;
  classes: {[className: string]: string};
  isLoading?: boolean;
  isOpen: boolean;
  options: HintMenuOption[];
  onSelect?: (value: HintMenuOption) => void;
  toggle: () => void;
  /* eslint-disable react/no-unused-prop-types */
  maxHeight?: number;
  isReversedY: boolean;
  /* eslint-enable react/no-unused-prop-types */
}

export default function HintsMenu({
  value,
  placeholder,
  options,
  isOpen,
  isLoading,

  onSelect,
  toggle,

  classes,
}: HintsMenuProps) {
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

  const optionClick = useCallback(option => {
    onSelect?.(option);
    toggle();
  }, [onSelect, toggle]);

  const optionChildren = useMemo(() => {
    const filteredOptions = options
      .filter(({ name }) => name.toLowerCase().includes(value?.toLowerCase() || ''));
    return filteredOptions.length
      ? filteredOptions.map(option => (
        <Option
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
          {placeholder || 'Ничего не найдено'}
        </Typography>
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, value, isOpen, isLoading, placeholder, optionClick]);

  return isOpen && (
    <div className={classes.container}>
      <div className={classes.menu}>
        <TextsSkeleton isDisplayed={isLoading}>
          <div className={classes.options}>
            <Spoiler
              mode="light"
              showNextButton={false}
              size={20}
            >
              {optionChildren}
            </Spoiler>
          </div>
        </TextsSkeleton>
      </div>
    </div>
  );
}
