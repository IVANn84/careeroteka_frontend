import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import RightHeaderNavigation from './RightHeaderNavigation';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',

    '& > *': {
      position: 'relative',
      cursor: 'pointer',

      '&:not(:first-child)': {
        marginLeft: 25,
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        opacity: 0,
        left: 1,
        right: 1,
        bottom: -2,
        height: 1,
        width: '100%',
        margin: 'auto',
        background: '#000',
        transition: 'opacity .2s',
      },

      '&:hover::after, &:focus-visible::after': {
        opacity: 1,
      },

      '&:active::after': {
        opacity: 1,
        width: '100%',
      },
    },
  },

  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 48,
  },
};

export default withStyle(style)(observer(RightHeaderNavigation));
