import withStyle from 'react-jss';

import Card from './Card';

const style = {
  container: {
    maxWidth: 238,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 7.23px 18.06px 1.81px #0000001A',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,

  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 6,
    borderRadius: '50%',
    backgroundColor: '#48494C',
  },
  description: {
    fontSize: 14,
    lineHeight: '20px',
    marginBottom: 10,
  },
  salary: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 600,
  },
};

export default withStyle(style)(Card);
