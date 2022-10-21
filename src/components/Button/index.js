import withStyle from 'react-jss';
import Button from './Button.jsx';

const style = ({button}) => ({
    button: {
        display: 'inline-block',
        width: 'auto',
        minWidth: 170,
        minHeight: 32,
        cursor: ({isDisabled}) => !isDisabled && 'pointer',
        transition: [['background', '.2s'], ['color', '.2s']],
        padding: ({variant = 'filled'}) => variant === 'outlined' ? [[14, 19]] : [[15, 20]],
        textAlign: 'center',
        fontSize: 20,
        color: ({variant = 'filled', mode = 'light'}) => button[variant][mode].color.default,
        background: ({variant = 'filled', mode = 'light'}) => button[variant][mode].background.default,
        border: ({variant = 'filled', mode = 'light'}) => variant === 'outlined'
            && [[1, 'solid', button.outlined[mode].border]],
        borderRadius: 100,
        opacity: ({isDisabled}) => isDisabled
            ? 0.5
            : 1,
        
        '&:hover': {
            background: ({isDisabled, variant = 'filled', mode = 'light'}) => isDisabled
                ? button[variant][mode].background.default
                : button[variant][mode].background.hovered,
            color: ({isDisabled, variant = 'filled', mode = 'light'}) => isDisabled
                ? button[variant][mode].color.default
                : button[variant][mode].color.hovered,
            border: 0,
            padding: [15, 20],
        },
        
        '&:active': {
            transition: 'none',
            background: ({isDisabled, variant = 'filled', mode = 'light'}) => isDisabled
                ? button[variant][mode].background.default
                : button[variant][mode].background.focused,
            color: ({isDisabled, variant = 'filled', mode = 'light'}) => isDisabled
                ? button[variant][mode].color.default
                : button[variant][mode].color.focused,
            border: 0,
            padding: [15, 20],
        },
    },
});

export default withStyle(style)(Button);
