import withStyles from 'react-jss';

import Divider from './Divider.jsx';

const style = ({divider}) => ({
    divider: {
        background: divider.color,
        height: divider.height,
        width: '100%',
    },
});

export default withStyles(style)(Divider);