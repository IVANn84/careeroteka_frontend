import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import VacanciesSlider from './VacanciesSlider.jsx';

const style = {
  slider: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'min-content',
    overflowX: 'overlay',
    scrollbarWidth: 'none',
    padding: [20, 64],
    margin: [-20, -64],

    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '& > a': {
      display: 'inline-block',
      width: 370,

      '&:not(:first-child)': {
        marginLeft: 30,
      },
    },

    '& > svg': {
      display: 'inline-block',

      '&:not(:first-child)': {
        marginLeft: 30,
      },
    },
  },

  '@media screen and (max-device-width: 576px)': {
    slider: {
      padding: [20, 16],
      margin: [-20, -16],

      '& > a:hover, & > a:focus-visible': {
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
    },
  },
};

// Слайдер курсов
const Component = memo(withStyle(style)(observer(VacanciesSlider)));

export default Component;
