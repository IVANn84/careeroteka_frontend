import withStyle from 'react-jss';

import Accordion from './Accordion';

const style = () => ({
  accordion: {
    '& > li:nth-child(1)': {
      backgroundColor: '#EBF2FE',
    },
    '& > li:nth-child(2)': {
      backgroundColor: '#D7E5FD',
    },
    '& > li:nth-child(3)': {
      backgroundColor: '#AFCBFA',

      '& > button > div > p > span': {
        color: '#F2F2F3',
      },
    },
    '& > li:nth-child(4)': {
      backgroundColor: '#86B0F8',

      '& > button > div > p > span': {
        color: '#F2F2F3',
      },
    },

    '& > li:not(:first-child)': {
      marginTop: -86,
    },
  },
});

export default withStyle(style)(Accordion);
