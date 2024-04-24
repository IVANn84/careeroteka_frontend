import React from 'react';

import Typography from 'Component/Typography';

interface Props {
  className?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  isDisplayed?: boolean;
  // Описание кнопки при наведении
  title?: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  variant?: 'filled' | 'outlined';
  mode?: 'light' | 'dark' | 'primary' | 'secondary';
  /* eslint-enable  react/no-unused-prop-types */
}

export default function Button({
  className,
  children,
  title,
  isDisabled = false,
  isDisplayed = true,
  type,
  onClick,

  classes,
}: Props) {
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
