import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Tabs from './Tabs.jsx';

const style = ({ customScrollbar, font }) => ({
  container: {
    whiteSpace: 'nowrap',
    overflowX: 'overlay',
    scrollbarWidth: 'none',
    marginBottom: 34,
    ...customScrollbar,

    '& > div': {
      display: 'inline-block',
      color: '#6D7279',
      cursor: 'pointer',
      transition: 'opacity .2s',

      '& > svg': {
        display: 'block',
        margin: 'auto',
        marginBottom: 16,
      },

      '&:not(:first-child)': {
        marginLeft: 36,
      },

      '&:hover, &:focus-visible': {
        opacity: 0.8,
      },
    },
  },
  loading: {
    '& > div': {
      cursor: 'auto',
      opacity: 0.7,

      '&:hover, &:focus-visible': {
        opacity: 0.7,
      },
    },
  },

  selectedTab: {
    color: `${font.color.alternative} !important`,
  },
});

export default withStyle(style)(observer(Tabs));
