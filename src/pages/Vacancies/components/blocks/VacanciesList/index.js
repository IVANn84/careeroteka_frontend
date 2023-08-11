import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import { memo } from 'react';

import VacanciesList from './VacanciesList.jsx';

const style = ({ font }) => ({
  container: {
    position: 'relative',
    marginTop: 50,
  },
  infiniteScroll: {
    padding: [30],
    margin: [-30],
  },
  vacanciesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))',
    gridGap: '30px',
    alignItems: 'start',
  },
  vacancyItem: {
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
  vacancyTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    wordBreak: 'break-word',
    marginBottom: 24,
  },
  vacancyAggregators: {
    '& > img': {
      width: 24,
      height: 24,
      marginLeft: -10,
    },
  },
  vacancyName: {
    wordBreak: 'break-word',
    marginBottom: 20,
  },
  vacancyCity: {
    display: 'inline-block',
    padding: [4, 6],
    borderRadius: 8,
    textAlign: 'center',
    background: '#F3F5F6',
  },
  vacancySalary: {
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
    infiniteScroll: {
      padding: 0,
      margin: 0,
    },
    vacancyItem: {
      width: '100%',

      '&:hover, &:focus-visible': {
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
    },
  },
});

export default memo(withStyle(style)(observer(VacanciesList)));
