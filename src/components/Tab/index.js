import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Tab from './Tab.jsx';

const style = ({ font }) => ({
  tab: {
    display: 'inline-block',
    color: '#6D7279',
    cursor: 'pointer',
    transition: 'opacity .2s',
    textAlign: 'center',

    '&:hover, &:focus-visible': {
      opacity: 0.8,
    },

    '& > svg': {
      display: 'block',
      margin: 'auto',
      marginBottom: 16,
    },
  },
  selectedTab: {
    color: `${font.color.alternative}`,
  },

  '@media screen and (max-device-width: 576px)': {
    tab: {
      '& > svg': {
        marginBottom: 6,
      },
    },
  },
});

const Component = withStyle(style)(Tab);

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Component;
