import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Grade from './Grade.jsx';

const style = ({ font }) => ({
  container: {
    position: 'relative',
    width: 240,
    padding: 20,
    border: [1, 'solid', '#767779'],
    borderRadius: 16,
    cursor: 'pointer',
    transition: 'transform .2s, box-shadow .2s',

    '&:hover, &:focus-visible': {
      transform: 'translateY(-5px)',
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  iconCircle: {
    borderRadius: '50%',
    height: 36,
    width: 36,
  },
  iconDescription: {
    borderRadius: '50%',
    height: 17,
    width: 17,
    textAlign: 'center',
    background: font.color.alternative,
    color: '#FFF',

    '&:hover ~ p': {
      visibility: 'visible',
      opacity: 1,
    },
  },
  descriptionPopup: {
    visibility: 'hidden',
    opacity: 0,
    position: 'absolute',
    textAlign: 'initial',
    width: 280,
    borderRadius: 16,
    backgroundColor: '#F2F2F3',
    bottom: 'calc(100% + 5px)',
    padding: 20,
    transition: 'all .2s',

    '& > span': {
      color: font.color.alternative,
    },
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  check: {
    width: 15,
    height: 15,
    color: font.color.alternative,
  },
});

export default withStyle(style)(observer(Grade));
