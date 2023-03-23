import withStyle from 'react-jss';

import Button from './Button.jsx';
import PropTypes from 'prop-types';

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
        color: ({variant = 'filled', mode = 'primary'}) => button[variant][mode].color.default,
        background: ({variant = 'filled', mode = 'primary'}) => button[variant][mode].background.default,
        border: ({variant = 'filled', mode = 'primary'}) => variant === 'outlined'
            && [[1, 'solid', button.outlined[mode].border]],
        borderRadius: 100,
        opacity: ({isDisabled}) => isDisabled
            ? 0.5
            : 1,
        
        '&:hover, &:focus-visible': {
            background: ({isDisabled, variant = 'filled', mode = 'primary'}) => isDisabled
                ? button[variant][mode].background.default
                : button[variant][mode].background.hovered,
            color: ({isDisabled, variant = 'filled', mode = 'primary'}) => isDisabled
                ? button[variant][mode].color.default
                : button[variant][mode].color.hovered,
            border: ({isDisabled, variant = 'filled', mode = 'primary'}) => variant === 'outlined'
                && isDisabled && [[1, 'solid', button.outlined[mode].border]] || 0,
            padding: ({isDisabled, variant = 'filled'}) => variant === 'outlined' && isDisabled
                ? [[14, 19]]
                : [[15, 20]],
        },
        
        '&:active': {
            transition: 'none',
            background: ({isDisabled, variant = 'filled', mode = 'primary'}) => isDisabled
                ? button[variant][mode].background.default
                : button[variant][mode].background.focused,
            color: ({isDisabled, variant = 'filled', mode = 'primary'}) => isDisabled
                ? button[variant][mode].color.default
                : button[variant][mode].color.focused,
            border: ({isDisabled, variant = 'filled', mode = 'primary'}) => variant === 'outlined'
                && isDisabled && [[1, 'solid', button.outlined[mode].border]] || 0,
            padding: ({isDisabled, variant = 'filled'}) => variant === 'outlined' && isDisabled
                ? [[14, 19]]
                : [[15, 20]],
        },
    },
});

const Component = withStyle(style)(Button);

Component.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['filled', 'outlined']),
    mode: PropTypes.oneOf(['light', 'dark', 'primary']),
    isDisabled: PropTypes.bool,
    isDisplayed: PropTypes.bool,
    // Описание кнопки при наведении
    title: PropTypes.string,
    onClick: PropTypes.func,
};

Component.defaultProps = {
    variant: 'filled',
    mode: 'primary',
    isDisabled: false,
    isDisplayed: true,
};

export default Component;
