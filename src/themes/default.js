export const colorNegative = '#DB0000';
export const colorAlternative = '#367CF3';

export default {
  layout: {
    paddingX: {
      desktop: 135,
      mobile: 17,
    },
  },

  background: {
    dark: '#1A1C1F',
    light: '#FFF',
    secondary: '#F2F2F3',
  },

  iconButton: {
    color: {
      default: '#000',
      hovered: '#2F74EA',
      focused: '#226AE5',
    },
  },

  button: {
    filled: {
      primary: {
        color: {
          default: '#FFF',
          hovered: '#FFF',
          focused: '#FFF',
        },
        background: {
          default: colorAlternative,
          hovered: '#2F74EA',
          focused: '#226AE6',
        },
      },
      dark: {
        color: {
          default: '#FFF',
          hovered: '#FFF',
          focused: '#FFF',
        },
        background: {
          default: '#000',
          hovered: '#2F74EA',
          focused: '#226AE5',
        },
      },
    },
    outlined: {
      light: {
        border: '#FFF',
        color: {
          default: '#FFF',
          hovered: '#FFF',
          focused: '#FFF',
        },
        background: {
          default: 'transparent',
          hovered: '#1A1C1F',
          focused: '#191A1B',
        },
      },
      primary: {
        border: colorAlternative,
        color: {
          default: colorAlternative,
          hovered: '#FFF',
          focused: '#FFF',
        },
        background: {
          default: 'transparent',
          hovered: '#2F74EA',
          focused: '#226AE5',
        },
      },
      dark: {
        border: '#000',
        color: {
          default: '#000',
          hovered: '#FFF',
          focused: '#FFF',
        },
        background: {
          default: 'transparent',
          hovered: '#1A1C1F',
          focused: '#15181B',
        },
      },
    },
  },

  font: {
    color: {
      light: '#FFF',
      regular: '#1A1C1F',
      secondary: 'rgba(0, 0, 0, .6)',
      alternative: colorAlternative,
      negative: colorNegative,
    },
    weight: {
      normal: 400,
      medium: 500,
      bold: 700,
      extraBold: 800,
    },
  },

  separator: {
    color: '#CCC',
  },

  input: {
    requireStarColor: '#DD657B',
    padding: {
      desktop: {
        xAxis: 18,
        yAxis: 18,
      },
      mobile: {
        xAxis: 10,
        yAxis: 17,
      },
    },
    background: '#FFF',
    boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
    border: {
      default: [[1, 'solid', 'rgba(26, 28, 31, .6)']],
      filled: [[1, 'solid', '#1A1C1F']],
      negative: [[1, 'solid', colorNegative]],
    },
    icon: {
      color: {
        default: '#1A1C1F',
        negative: colorNegative,
      },
    },
    placeholder: {
      default: 'rgba(26, 28, 31, .6)',
      negative: `${colorNegative}99`,
    },
  },

  dropdown: {
    requireStarColor: '#DD657B',
    padding: {
      desktop: {
        xAxis: 18,
        yAxis: 18,
      },
      mobile: {
        xAxis: 10,
        yAxis: 17,
      },
    },
    icon: {
      color: {
        default: '#1A1C1F',
        negative: colorNegative,
      },
    },
    color: {
      light: '#1A1C1F',
      primary: '#FFF',
    },
    placeholder: {
      light: {
        default: 'rgba(26, 28, 31, .6)',
        negative: `${colorNegative}99`,
      },
      primary: {
        default: 'rgba(255, 255, 255, .9)',
        negative: `${colorNegative}99`,
      },
    },
    spoiler: {
      color: {
        light: colorAlternative,
        primary: '#FFF',
      },
    },
    border: {
      light: {
        default: [[1, 'solid', 'rgba(26, 28, 31, .6)']],
        filled: [[1, 'solid', '#1A1C1F']],
        negative: [[1, 'solid', colorNegative]],
      },
      primary: {
        default: 'none',
        filled: 'none',
        negative: [[1, 'solid', colorNegative]],
      },
    },
    valueBoxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
    boxShadow: {
      default: [[0, 20, 20, 2, 'rgba(0, 0, 0, .1)']],
      reversed: [[0, -20, 20, 2, 'rgba(0, 0, 0, .1)']],
    },
    background: {
      light: '#FFF',
      primary: colorAlternative,
    },
    optionBackground: {
      default: 'transparent',
      selected: 'rgba(72, 97, 171, .2)',
      hovered: 'rgba(196, 196, 196, .2)',
    },
  },

  block: {
    padding: {
      desktop: {
        default: {
          xAxis: 64,
          yAxis: 64,
        },
        slim: {
          xAxis: 40,
          yAxis: 40,
        },
      },
      mobile: {
        default: {
          xAxis: 16,
          yAxis: 40,
        },
        slim: {
          xAxis: 16,
          yAxis: 40,
        },
      },
    },
    borderRadius: {
      desktop: 32,
      mobile: 20,
    },
    background: {
      light: '#FFF',
      dark: '#F2F2F3',
    },
    boxShadow: [[0, 4, 20, 2, 'rgba(0, 0, 0, .1)']],
  },

  typography: {
    fontWeight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },

    variants: {
      // Header
      H1: {
        fontSize: 48,
        lineHeight: '54px',
      },
      H2: {
        fontSize: 36,
        lineHeight: '42px',
      },
      H3: {
        fontSize: 32,
        lineHeight: '38px',
      },
      H4: {
        fontSize: 28,
        lineHeight: '36px',
      },
      H5: {
        fontSize: 24,
        lineHeight: '30px',
      },

      // Body
      B1: {
        fontSize: 20,
        lineHeight: '26px',
      },
      B2: {
        fontSize: 16,
        lineHeight: '22px',
      },

      // Caption
      C1: {
        fontSize: 13,
        lineHeight: '18px',
      },
    },
  },

  divider: {
    color: 'rgba(38, 38, 38, 0.08)',
    height: 1,
  },

  customScrollbar: {
    '&::-webkit-scrollbar': {
      height: 12,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#CBCBCB',
      borderRadius: 12,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: colorAlternative,
      borderRadius: 12,
    },
    '&::-webkit-scrollbar-button': {
      width: 0,
      height: 0,
      display: 'none',
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },
  },
};
