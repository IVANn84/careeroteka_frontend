import withStyle from 'react-jss';
import { forwardRef } from 'react';

import Typography from './Typography';

const style = ({ typography }) => ({
  typography: {
    fontSize: ({ variant }) => typography.variants[variant].fontSize,
    lineHeight: ({ variant }) => typography.variants[variant].lineHeight,
    fontWeight: ({ variant, weight }) => typography.fontWeight[['H1', 'H1Lending', 'H2', 'H3', 'H4', 'H5'].includes(variant)
      ? 'bold'
      : weight],

    '@media screen and (max-device-width: 576px)': {
      fontSize: ({ variantMobile }) => typography.variants[variantMobile].fontSize,
      lineHeight: ({ variantMobile }) => typography.variants[variantMobile].lineHeight,
      fontWeight: ({ variantMobile, weightMobile }) => typography.fontWeight[['H1', 'H2', 'H3', 'H4', 'H5'].includes(variantMobile)
        ? 'bold'
        : weightMobile],
    },
  },
});

// Типография
const Component = withStyle(style)(forwardRef(Typography));

export default Component;
