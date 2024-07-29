import React, { AllHTMLAttributes } from 'react';

// type GeneralProps = {
//   children: React.ReactNode;
//   isDisplayed?: boolean;
//   component?: string;
//   className?: string;
//   classes: {[className: string]: boolean};
// }
//
// type DesktopHeaderProps = {
//   variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
// }
//
// type DesktopTextProps = {
//   variant: 'B1' | 'B2' | 'C1';
//   weight: 'regular' | 'semiBold' | 'medium';
// }
//
// type MobileHeaderProps = {
//   variantMobile: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
// }
//
// type MobileTextProps = {
//   variantMobile: 'B1' | 'B2' | 'C1';
//   weightMobile: 'regular' | 'semiBold' | 'medium';
// }
//
// type Props = GeneralProps &
//   (DesktopHeaderProps | DesktopTextProps) &
//   (MobileHeaderProps | MobileTextProps)
//   & HTMLAttributes<any>;

type Variant = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'B1' | 'B2' | 'C1';
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
