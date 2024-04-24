import withStyle from 'react-jss';

import Block from './Block';

const style = ({ block }) => ({
  container: {
    padding: ({ isSlim, padding }) => (padding || (isSlim
      ? [[block.padding.desktop.slim.yAxis, block.padding.desktop.slim.xAxis]]
      : [[block.padding.desktop.default.yAxis, block.padding.desktop.default.xAxis]])),
    borderRadius: ({ borderRadius }) => borderRadius || block.borderRadius.desktop,
    boxShadow: ({ mode = 'light' }) => mode === 'light' && block.boxShadow,
    background: ({ mode = 'light' }) => block.background[mode],

    '@media screen and (max-device-width: 576px)': {
      padding: ({ paddingMobile }) => paddingMobile
        || [[block.padding.mobile.default.yAxis, block.padding.mobile.default.xAxis]],
      borderRadius: ({ borderRadiusMobile }) => borderRadiusMobile || block.borderRadius.mobile,
    },
  },
});

// Обертка блока на странице
const Component = withStyle(style as any)(Block);

export default Component;
