import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import ProfessionList from './ProfessionList';

const style = ({ font }) => ({
  container: {
    position: 'relative',
    marginTop: 50,
  },
  infiniteScroll: {
    padding: [20],
    margin: [-20],
  },
  professionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '40px',
  },
  professionItem: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    padding: 25,
    borderRadius: 32,
    cursor: 'pointer',
    border: [1, 'solid', '#E5E5E5'],
    width: 260,
    height: 260,
    background: 'linear-gradient(43.17deg, #F4F4F4 3.67%, #FEFEFE 67.4%)',
    transition: 'transform .2s, box-shadow .2s',

    '&:hover, &:focus-visible': {
      transform: 'translateY(-5px)',
      boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
    },
  },
  professionTitle: {
    '& > p': {
      wordBreak: 'break-word',
    },
    '& > span': {
      display: 'block',
      marginTop: 10,
      color: font.color.secondary,
    },
  },
  professionMinSalary: {
    width: '100%',
    textAlign: 'end',
  },

  '@media screen and (max-device-width: 576px)': {
    professionsContainer: {
      gridGap: '30px',
    },
    infiniteScroll: {
      padding: 0,
      margin: 0,
    },
    professionItem: {
      width: '100%',

      '&:hover, &:focus-visible': {
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
    },
  },
});

export default memo(withStyle(style)(observer(ProfessionList)));
