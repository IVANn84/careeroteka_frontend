export const style = ({
  input: {
    background,
    border,
    icon,
    placeholder,
    padding,
    requireStarColor,
  },
  typography,
  font,
}) => ({
  container: {
    width: '100%',
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    background,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 16,
    border: ({ error, value }) => {
      if (value) {
        return error
          ? border.negative
          : border.filled;
      }

      return error
        ? border.negative
        : border.default;
    },
    opacity: ({ isDisabled }) => isDisabled && 0.5,

    '&:focus-within': {
      border: ({ error }) => (error
        ? border.negative
        : border.filled),
    },
  },
  wrapperWithHint: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  wrapperWithHintReversed: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  input: {
    overflow: 'hidden',
    width: '100%',
    display: 'inline-block',
    position: 'relative',

    '& > input': {
      position: 'relative',
      fontSize: typography.variants.B1.fontSize,
      lineHeight: typography.variants.B1.lineHeight,
      border: 0,
      zIndex: 1,
      width: '100%',
      padding: [padding.desktop.yAxis, 0, padding.desktop.yAxis, padding.desktop.xAxis],
      color: font.color.regular,
      background: 'transparent',
    },
  },
  placeholder: {
    witheSpace: 'nowrap',
    textWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: ({ value }) => value && 'none',
    width: `calc(100% - ${padding.desktop.xAxis}px)`,
    fontSize: typography.variants.B1.fontSize,
    lineHeight: typography.variants.B1.lineHeight,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: padding.desktop.xAxis,
    userSelect: 'none',
    color: placeholder.default,

    '&:after': {
      content: ({ isRequired }) => isRequired && '"*"',
      color: requireStarColor,
    },
  },
  placeholderAtTop: {
    fontSize: typography.variants.B1.fontSize,
    lineHeight: typography.variants.B1.lineHeight,
    userSelect: 'none',
    color: placeholder.default,
    marginBottom: 8,

    '&:after': {
      content: ({ isRequired }) => isRequired && '"*"',
      color: requireStarColor,
    },
  },

  actions: {
    display: 'flex',
    margin: [0, padding.desktop.xAxis, 0, 8],
    color: icon.color.default,

    '& > *': {
      border: 0,
      width: 24,
      height: 24,
      margin: [0, 2],
      cursor: ({ isDisabled }) => !isDisabled && 'pointer',
      transition: 'opacity .2s',

      '&:hover': {
        opacity: ({ isDisabled }) => !isDisabled && '.7',
      },

      '&:focus': {
        outline: 'none',
        opacity: ({ isDisabled }) => !isDisabled && '.7',
      },

      '&:active': {
        transition: 'none',
        opacity: ({ isDisabled }) => !isDisabled && '.9',
      },
    },
  },

  error: {
    margin: [5, 0, 0, 15],
    fontSize: 15,
    color: font.color.negative,
  },

  '@media screen and (max-device-width: 576px)': {
    input: {
      '& > input': {
        fontSize: typography.variants.B2.fontSize,
        lineHeight: typography.variants.B2.lineHeight,
        padding: [padding.mobile.yAxis, 0, padding.mobile.yAxis, padding.mobile.xAxis],
      },
    },

    placeholder: {
      fontSize: typography.variants.B2.fontSize,
      lineHeight: typography.variants.B2.lineHeight,
      left: padding.mobile.xAxis,
    },

    actions: {
      margin: [0, padding.mobile.xAxis, 0, 8],
    },
  },
});
