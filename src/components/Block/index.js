import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Block from './Block.jsx';

const style = ({block}) => ({
    container: {
        padding: ({isSlim, padding}) => padding
            ? padding
            : isSlim
                ? [[block.padding.desktop.slim.yAxis, block.padding.desktop.slim.xAxis]]
                : [[block.padding.desktop.default.yAxis, block.padding.desktop.default.xAxis]],
        borderRadius: ({borderRadius}) => borderRadius || block.borderRadius.desktop,
        boxShadow: ({mode = 'light'}) => mode === 'light' && block.boxShadow,
        background: ({mode = 'light'}) => block.background[mode],
    
        '@media screen and (max-device-width: 576px)': {
            padding: ({paddingMobile}) => paddingMobile || [[block.padding.mobile.default.yAxis, block.padding.mobile.default.xAxis]],
            borderRadius: ({borderRadiusMobile}) => borderRadiusMobile || block.borderRadius.mobile,
        },
    },
});

// Обертка блока на странице
const Component = withStyle(style)(Block);

Component.propTypes = {
    children: PropTypes.node.isRequired,
    isDisplayed: PropTypes.bool,
    className: PropTypes.string,
    // Светлый или темный блок
    mode: PropTypes.oneOf(['light', 'dark']),
    style: PropTypes.object,
    // Узкий блок
    isSlim: PropTypes.bool,
    padding: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
    ]),
    paddingMobile: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
    ]),
    borderRadius: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
    ]),
    borderRadiusMobile: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
    ]),
};

Component.defaultProps = {
    isDisplayed: true,
    mode: 'light',
};

export default Component;
