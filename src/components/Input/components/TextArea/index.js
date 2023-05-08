import withStyle from 'react-jss';

import { style } from '../template';
import TextArea from './TextArea.jsx';

const selfStyle = theme => {
  const {
    typography,
    font,
    input: {
      padding,
    },
  } = theme;

  const templateStyle = style(theme);

  return {
    wrapper: {
      ...templateStyle.wrapper,
      alignItems: 'initial',
    },
    textarea: {
      overflow: 'hidden',
      width: '100%',
      display: 'inline-block',
      position: 'relative',

      '& > textarea': {
        height: 200,
        position: 'relative',
        fontSize: typography.variants.B1.fontSize,
        lineHeight: typography.variants.B1.lineHeight,
        border: 0,
        zIndex: 1,
        width: '100%',
        padding: [padding.desktop.yAxis, 0, padding.desktop.yAxis, padding.desktop.xAxis],
        color: font.color.regular,
        background: 'transparent',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
    placeholder: {
      ...templateStyle.placeholder,
      top: padding.desktop.yAxis,
      transform: 'none',
    },
    actions: {
      ...templateStyle.actions,
      flexDirection: 'column',
      alignSelf: 'end',
      margin: [0, padding.desktop.xAxis, padding.desktop.yAxis, 8],

      '& > *': {
        ...templateStyle.actions['& > *'],
        margin: 0,
      },
    },
  };
};

const combinedStyle = theme => ({ ...style(theme), ...selfStyle(theme) });

export default withStyle(combinedStyle)(TextArea);
