import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Typography from './Typography.jsx';

const style = ({typography}) => ({
    typography: {
        fontSize: ({variant}) => typography.variants[variant].fontSize,
        lineHeight: ({variant}) => typography.variants[variant].lineHeight,
        fontWeight: ({variant, weight}) => typography.fontWeight[['H1', 'H2', 'H3', 'H4', 'H5'].includes(variant)
            ? 'bold'
            : weight],
    
        '@media screen and (max-device-width: 576px)': {
            fontSize: ({variantMobile}) => typography.variants[variantMobile].fontSize,
            lineHeight: ({variantMobile}) => typography.variants[variantMobile].lineHeight,
            fontWeight: ({variantMobile, weightMobile}) => typography.fontWeight[['H1', 'H2', 'H3', 'H4', 'H5'].includes(variantMobile)
                ? 'bold'
                : weightMobile],
        },
    },
});

// Типография
const Component = withStyle(style)(Typography);

Component.propTypes = {
    children: PropTypes.node,
    isDisplayed: PropTypes.bool,
    component: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'B1',
        'B2',
        'C1',
    ]).isRequired,
    variantMobile: PropTypes.oneOf([
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'B1',
        'B2',
        'C1',
    ]).isRequired,
    weight: PropTypes.oneOf([
        'regular',
        'semiBold',
    ]),
    weightMobile: PropTypes.oneOf([
        'regular',
        'semiBold',
    ]),
};

Component.defaultProps = {
    isDisplayed: true,
    component: 'span',
};

export default Component;
