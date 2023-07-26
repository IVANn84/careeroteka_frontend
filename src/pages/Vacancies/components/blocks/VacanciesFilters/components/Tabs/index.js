import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Tabs from './Tabs.jsx';

const style = ({ customScrollbar }) => ({
  container: {
    whiteSpace: 'nowrap',
    overflowX: 'overlay',
    scrollbarWidth: 'none',
    marginBottom: 25,
    paddingBottom: 30,
    ...customScrollbar,

    '& > div': {
      display: 'inline-block',
      cursor: 'pointer',

      '& > svg': {
        display: 'block',
        margin: 'auto',
        marginBottom: 16,
      },

      '&:not(:first-child)': {
        marginLeft: 36,
      },
    },
  },
});

export default withStyle(style)(observer(Tabs));
