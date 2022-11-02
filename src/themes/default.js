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
            light: {
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
        },
    },
    
    separator: {
        color: '#CCC',
    },
    
    input: {
        padding: 18,
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
        boxShadow: {
            default: [[0, 20, 20, 2, 'rgba(0, 0, 0, .1)']],
            reversed: [[0, -20, 20, 2, 'rgba(0, 0, 0, .1)']],
        },
        background: {
            default: 'transparent',
            selected: 'rgba(72, 97, 171, .2)',
            hovered: 'rgba(196, 196, 196, .2)',
        },
    },
};
