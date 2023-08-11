import React from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';
import { onEnter } from 'Util/onEnter';

export default function Value({
  selectedValue,
  placeholder,
  isDisabled,
  isRequired,
  isClearable,

  toggle,
  onSelect,

  classes,
}) {
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
      role="button"
      className={classes.container}
      tabIndex={0}
      onKeyDown={onEnter(onClick)}
      onClick={onClick}
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
            tabIndex={0}
            onKeyDown={onEnter(clear)}
            onClick={clear}
          />
        )}
        <ChevronDownIcon className={classes.arrow} />
      </div>
    </div>
  );
}
