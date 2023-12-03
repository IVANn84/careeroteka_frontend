import React from 'react';

import Typography from 'Component/Typography';

export default function Button({
  className,
  children,
  title,
  isDisabled = false,
  isDisplayed = true,

  onClick,

  classes,
}) {
  return isDisplayed && (
    <button
      className={`${classes.button} ${className || ''}`}
      disabled={isDisabled}
      onClick={onClick}
      title={title}
      type="button"
    >
      <Typography
        variant="B1"
        variantMobile="B2"
        weight="regular"
        weightMobile="regular"
      >
        {children}
      </Typography>
    </button>
  );
}
