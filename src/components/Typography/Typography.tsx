import React, { AllHTMLAttributes } from 'react';

type Variant = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'B1' | 'B2' | 'C1' | 'H1Lending';
type Weight = 'regular' | 'semiBold' | 'medium' | 'bold';

interface Props extends AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  isDisplayed?: boolean;
  component?: string;
  className?: string;
  classes: {[className: string]: boolean};
  variant: Variant;
  weight?: Weight
  variantMobile: Variant;
  weightMobile?: Weight;
}

export default function Typography({
  children,
  isDisplayed = true,
  component = 'span',
  className,
  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  variant,
  variantMobile,
  weight,
  weightMobile,
  /* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars */

  classes,
  ...props
}: Props, ref) {
  return isDisplayed && React.createElement(component, {
    className: `${classes.typography} ${className || ''}`,
    ref,
    ...props,
  }, children);
}
