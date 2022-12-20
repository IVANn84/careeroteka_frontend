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
                    default: '#367CF3',
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
                border: '#367CF3',
                color: {
                    default: '#367CF3',
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
            alternative: '#367CF3',
            negative: '#EA4E1B',
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
            default: [[1, 'solid', 'rgba(0, 0, 0, .4)']],
            negative: [[1, 'solid', '#EA4E1B']],
        },
        icon: {
            color: {
                default: '#1A1C1F',
                negative: '#EA4E1B',
            },
        },
        placeholder: {
            default: 'rgba(0, 0, 0, .4)',
            negative: 'rgba(250, 130, 130, .4)',
        },
    },
    
    dropdown: {
        color: {
            light: '#1A1C1F',
            primary: '#FFF',
        },
        placeholder: {
            light: 'rgba(0, 0, 0, .4)',
            primary: 'rgba(255, 255, 255, .9)',
        },
        spoiler: {
            color: {
                light: '#367CF3',
                primary: '#FFF',
            },
        },
        border: {
            light: [[1, 'solid', 'rgba(0, 0, 0, .4)']],
            regular: 'none',
        },
        boxShadow: {
            default: [[0, 20, 20, 2, 'rgba(0, 0, 0, .1)']],
            reversed: [[0, -20, 20, 2, 'rgba(0, 0, 0, .1)']],
        },
        background: {
            light: '#FFF',
            primary: '#367CF3',
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
};
