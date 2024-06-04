import withStyle from 'react-jss';

import AccordionItem from './AccordionItem';

const style = () => ({
  item: {
    backgroundColor: '#D9D9D933',
    borderRadius: 16,
  },
  button: {
    width: '100%',
    cursor: 'pointer',
    padding: [20, 24],
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevron: {
    transition: 'transform 0.3s linear',
  },
  chevron_open: {
    transform: 'rotate(-180deg)',
  },
  content: {
    overflow: 'hidden',
    transition: 'height 0.3s linear',
  },
  body: {
    display: 'block',
    paddingTop: 17,
    paddingBottom: 20,
  },
});

export default withStyle(style)(AccordionItem);
