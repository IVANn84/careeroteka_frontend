import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Vacancy from './Vacancy';

const style = ({ font, background }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: [24, 20],
    borderRadius: 16,
    cursor: 'pointer',
    height: '100%',
    minHeight: 192,
    transition: 'transform .2s, box-shadow .2s',
    boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
    background: background.light,

    '&:hover, &:focus-visible': {
      transform: 'translateY(-5px)',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  company: {
    wordBreak: 'break-word',
    marginBottom: 24,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 1,
    boxOrient: 'vertical',
  },
  name: {
    wordBreak: 'break-word',
    marginBottom: 20,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 2,
    boxOrient: 'vertical',
  },
  city: {
    display: 'inline-block',
    padding: [4, 6],
    borderRadius: 8,
    textAlign: 'center',
    background: background.vacancyCity,
  },
  salary: {
    display: 'inline-block',
    padding: [4, 6],
    borderRadius: 8,
    textAlign: 'center',
    color: font.color.light,
    background: font.color.alternative,
  },
  info: {
    minHeight: 26,
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '12px',
    rowGap: '8px',
    width: '100%',
    alignItems: 'center',
  },
  check: {
    width: 16,
    height: 16,

    '& > svg': {
      width: 16,
      height: 16,
      color: font.color.alternative,
      marginLeft: -11,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
      minHeight: 177,
      boxShadow: [[0, 4, 10, 2, 'rgba(0, 0, 0, .15)']],

      '&:hover, &:focus-visible': {
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
    },
    company: {
      marginBottom: 12,
    },
    name: {
      marginBottom: 16,
    },
  },
});

export default memo(withStyle(style)(observer(Vacancy)));
