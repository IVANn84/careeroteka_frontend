import withStyle from 'react-jss';

import Rates from './Rates';

const style = ({ font }) => ({
  container: {
    maxWidth: 1170,
    margin: [87, 'auto'],
  },
  title: {
    maxWidth: 490,
    textAlign: 'center',
    margin: [0, 'auto'],
  },
  highlight: {
    color: font.color.alternative,
  },
  lists: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 46,
  },
  card: {
    maxWidth: 370,
    padding: [20, 20],
    border: '1px solid #D1D2D2',
    borderRadius: 24,
    minHeight: 604,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: '#E8E8E9',
    marginBottom: 8,
  },
  card_description: {
    color: '#767779',
    marginTop: 6,
    marginBottom: 17,
  },
  card_button: {
    width: '100%',
    marginTop: 26,
    marginBottom: 26,
  },
  card_list: {
    marginTop: 10,
    listStyle: 'disc',
    paddingLeft: 12,
    fontSize: 16,
    lineHeight: '22px',
    color: '#767779',

    '& li': {
      marginBottom: 8,
    },
  },
});

export default withStyle(style)(Rates);
