import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import Courses from './Courses.jsx';

const style = ({ iconButton }) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  navigation: {
    color: iconButton.color.default,
    '& > svg': {
      cursor: 'pointer',
      width: 48,
      transition: 'color .2s',

      '&:hover, &:focus-visible': {
        color: iconButton.color.hovered,
      },

      '&:active': {
        color: iconButton.color.focused,
      },
    },
  },

  '@media screen and (max-device-width: 576px)': {
    header: {
      marginBottom: 31,
    },
    navigation: {
      display: 'none',
    },
  },
});

export default withStyle(style)(observer(Courses));
