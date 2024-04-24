import React from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';

interface Props {
  selectedValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  toggle?: () => void;
  isClearable?: boolean;
  onSelect?: (value: null) => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  mode: 'light' | 'primary';
  isOpen: boolean;
  isReversedY: boolean;
  error?: string | boolean;
  /* eslint-enable  react/no-unused-prop-types */
}

export default function Value({
  selectedValue,
  placeholder,
  isDisabled,
  isRequired,
  isClearable,

  toggle,
  onSelect,

  classes,
}: Props) {
  const onClick = () => {
    if (!isDisabled) {
      toggle?.();
    }
  };

  const clear = event => {
    event.stopPropagation();
    onSelect?.(null);
  };

  return (
    <div
      className={classes.container}
      onClick={onClick}
      onKeyDown={onEnter(onClick)}
      role="button"
      tabIndex={0}
    >
      <Typography
        variant="B1"
        variantMobile="B2"
      >
        {selectedValue || placeholder}
        {!selectedValue && isRequired && <span className={classes.requireStar}>*</span>}
      </Typography>
      <div className={classes.actions}>
        {isClearable && !isDisabled && selectedValue && (
          <XMarkIcon
            onClick={clear}
            onKeyDown={onEnter(clear)}
            tabIndex={0}
          />
        )}
        <ChevronDownIcon className={classes.arrow} />
      </div>
    </div>
  );
}
