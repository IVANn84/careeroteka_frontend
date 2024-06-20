import withStyle from 'react-jss';
import { memo } from 'react';

import ToolsSlider from './ToolsSlider';

const style = () => ({
  slider: {
    display: 'flex',
    gap: 12,
    overflowX: 'scroll',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

const Component = memo(withStyle(style)(ToolsSlider));

export default Component;
