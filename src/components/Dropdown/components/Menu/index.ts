import withStyle from 'react-jss';

import Menu from './Menu';

const style = ({
  dropdown: {
    boxShadow,
    color,
    placeholder,
    background,
  },
  typography,
  separator,
}) => ({
  container: {
    fontSize: typography.variants.B1.fontSize,
    lineHeight: typography.variants.B1.lineHeight,
    width: '100%',
    padding: [8, 18],
    paddingTop: ({ isSearchable }) => isSearchable && 0,
    position: 'absolute',
    top: ({ isReversedY }) => isReversedY && 0,
    zIndex: 2,
    overflowY: 'hidden',
    transform: ({ isReversedY }) => isReversedY && 'translateY(-100%)',
    background: ({ mode }) => background[mode],
    color: ({ mode }) => color[mode],
    pointerEvents: 'none',
    boxShadow: ({ isReversedY }) => (isReversedY
      ? boxShadow.reversed
      : boxShadow.default),
    borderRadius: ({ isReversedY }) => (isReversedY
      ? [[16, 16, 0, 0]]
      : [[0, 0, 16, 16]]),
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: ({ isLoading }) => isLoading && 120,
    maxHeight: ({ maxHeight }) => maxHeight,
    pointerEvents: 'initial',

    '& > svg': {
      marginTop: 3,
    },
  },
  options: {
    flex: 1,
    overflowY: 'auto',
    minHeight: 1,
    scrollbarWidth: 'none',
    scrollbarHeight: 'none',

    '& > *:not(:first-child)': {
      marginTop: 3,
    },

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  search: {
    padding: [13, 13, 13, 10],
    marginBottom: 8,
    justifyContent: 'space-between',
    borderBottom: [[1, 'solid', separator.color]],

    '& > input::placeholder': {
      userSelect: 'none',
      color: ({ error, mode }) => (error
        ? placeholder[mode]?.negative
        : placeholder[mode]?.default),
    },
  },
  placeholder: {
    display: 'block',
    color: ({ mode }) => placeholder[mode]?.default,
    padding: 8,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      fontSize: typography.variants.B2.fontSize,
      lineHeight: typography.variants.B2.lineHeight,
    },
  },
});

const Component = withStyle(style as any)(Menu);

export default Component;
