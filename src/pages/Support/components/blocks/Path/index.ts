import withStyle from 'react-jss';

import Path from './Path';

const style = ({ font }) => ({
  container: {
    maxWidth: 1170,
    margin: [107, 'auto', 78],
  },
  title: {
    maxWidth: 490,
    textAlign: 'center',
    margin: [0, 'auto'],
  },
  highlight: {
    color: font.color.alternative,
  },
  description: {
    maxWidth: 930,
    textAlign: 'center',
    margin: [24, 'auto', 36],
  },
  lists: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  list: {
    width: 'fit-content',
    padding: [18, 16],
    backgroundColor: '#FAFAFA',
    borderRadius: 24,
  },
  highlight_wrapper: {
    color: '#A3A4A5',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: 13,
    marginTop: 14,
  },
});

export default withStyle(style)(Path);
