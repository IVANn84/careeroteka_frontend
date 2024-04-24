import withStyle from 'react-jss';

import Benefit from './Benefit';

const style = {
  container: {
    display: 'flex',
    marginLeft: 135,
    marginRight: 135,
    gap: 71,
    alignItems: 'center',
  },
  image: {
    maxWidth: 729,
  },
  title: {
    color: ({ color }) => color,
    marginBottom: 20,
  },
  link: {
    display: 'block',
    color: ({ color }) => color,
    marginTop: 20,
  },
};

export default withStyle(style)(Benefit);
