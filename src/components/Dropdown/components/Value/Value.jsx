import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';
import { onEnter } from 'Util/onEnter';

export default function Value({
  selectedValue,
  placeholder,
  isDisabled,
  isRequired,

  toggle,

  classes,
}) {
  const onClick = () => {
    if (!isDisabled) {
      toggle?.();
    }
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
      <ChevronDownIcon
        className={classes.button}
        width={24}
        height={24}
      />
    </div>
  );
}
