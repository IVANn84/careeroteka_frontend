import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import { forwardRef, memo } from 'react';

import Survey from './Survey.jsx';

const style = ({ block }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& > h2': {
      marginBottom: 24,
    },
  },
  actions: {
    marginTop: 36,
  },
  image: {
    margin: ['auto', 0, -block.padding.desktop.default.yAxis, 50],

    '& > img': {
      display: 'block',
      marginLeft: 'auto',
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      flexDirection: 'column',
    },
    about: {
      '& > h2': {
        marginBottom: 18,
      },
    },
    actions: {
      marginBottom: 50,
    },
    image: {
      margin: [0, 'auto', -block.padding.mobile.default.yAxis, 'auto'],
      width: 250,
    },
  },
});

export default memo(withStyle(style)(observer(forwardRef(Survey))));
