import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Response from './Response';

const style = () => ({
  container: {
    display: 'flex',
    width: '29.73%',
    gap: 11,
    height: 90,
    justifyContent: 'center',
  },

  buttonResponse: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 58,
    padding: [16, 32],
    borderRadius: 8,

    '& > *:first-child': {
      fontSize: 20,
    },
  },

  buttonShare: {
    display: 'flex',
    minWidth: 58,
    minHeight: 60,
    padding: '16px 20px',
    borderRadius: 8,
    background: 'none',
    borderColor: 'black',

    '& > *:first-child': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  '@media screen and (max-device-width: 760px)': {
    container: {
      width: '100%',
      height: 70,
      padding: [12, 20],
    },
    buttonResponse: {
      width: 151,
      height: 46,
      padding: [12, 16],

      '& > *:first-child': {
        fontSize: 16,
      },
    },
    buttonShare: {
      minWidth: 52,
      minHeight: 46,
      padding: [14, 16],
    },
  },
});

export default memo(withStyle(style)(observer(Response)));
