import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import { memo } from 'react';

import Vacancy from './Vacancy.jsx';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
    borderRadius: 16,
    cursor: 'pointer',
    minHeight: 190,
    transition: 'transform .2s, box-shadow .2s',
    boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],

    '&:hover, &:focus-visible': {
      transform: 'translateY(-5px)',
    },
  },
  company: {
    display: 'block',
    wordBreak: 'break-word',
    marginBottom: 24,
  },
  name: {
    wordBreak: 'break-word',
    marginBottom: 20,
  },
  city: {
    display: 'inline-block',
    padding: [4, 6],
    borderRadius: 8,
    textAlign: 'center',
    background: '#F3F5F6',
  },
  salary: {
    display: 'inline-block',
    marginLeft: 12,
    padding: [4, 6],
    borderRadius: 8,
    textAlign: 'center',
    color: font.color.light,
    background: font.color.alternative,
  },
  info: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  check: {
    '& > svg': {
      width: 15,
      height: 15,
      color: font.color.alternative,
      marginLeft: -11,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',

      '&:hover, &:focus-visible': {
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
    },
  },
});

export default memo(withStyle(style)(observer(Vacancy)));
