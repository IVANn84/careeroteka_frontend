import withStyle from 'react-jss';

import Accordion from './Accordion';

const style = () => ({
  accordion: {
    '& li:not(:last-child)': {
      marginBottom: 20,
    },
  },
});

export default withStyle(style)(Accordion);
