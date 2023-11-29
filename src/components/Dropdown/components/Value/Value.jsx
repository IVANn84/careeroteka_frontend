import React from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';

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
