import withStyle from 'react-jss';

import { withIsDisplay } from 'Hoc/withIsDisplay';

import Filters from './Filters.jsx';

const style = ({ customScrollbar }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '75vw',
    height: '100%',
  },
  content: {
    paddingTop: 36,
    paddingBottom: 36,
    overflowY: 'scroll',
    ...customScrollbar,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default withIsDisplay(withStyle(style)(Filters));
