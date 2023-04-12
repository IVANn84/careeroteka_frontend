import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Footer from './Footer.jsx';

const style = {
    container: {
        display: 'flex',
        justifyContent: 'end',
        marginTop: 25,
        
        '& > *:not(:first-child)': {
            marginLeft: 12,
        },
    },
};

const Component = withStyle(style)(Footer);

Component.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Component;