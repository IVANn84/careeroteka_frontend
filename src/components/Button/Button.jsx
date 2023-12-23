import React from 'react';

import Typography from 'Component/Typography';

export default function Button({
  className,
  children,
  title,
  isDisabled = false,
  isDisplayed = true,
  type,
  onClick,

  classes,
}) {
  return isDisplayed && (
    <button
      className={`${classes.button} ${className || ''}`}
      disabled={isDisabled}
      onClick={onClick}
      title={title}
      type={type} //eslint-disable-line
    >
      <Typography
        variant="B1"
        variantMobile="B1"
        weight="regular"
        weightMobile="regular"
      >
        {children}
      </Typography>
    </button>
  );
}
