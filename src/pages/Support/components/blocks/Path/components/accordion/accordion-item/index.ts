import withStyle from 'react-jss';

import AccordionItem from './AccordionItem';

const style = () => ({
  item: {
    borderRadius: 24,
  },
  button: {
    width: '100%',
    cursor: 'pointer',
    paddingTop: 18,
    transition: 'padding 0.3s linear',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: [0, 16],
    height: 24,
  },
  highlight: {
    color: '#A3A4A5',
  },
  icon: {
    width: 24,
    padding: [0, 3],
  },
  content: {
    overflow: 'hidden',
    transition: 'height 0.3s linear',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingTop: 18,
    margin: [0, 16],
  },
});

export default withStyle(style)(AccordionItem);
