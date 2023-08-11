import withStyle from 'react-jss';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import MultiRangeSlider from './MultiRangeSlider.jsx';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '& > input': {
      pointerEvents: 'none',
      position: 'absolute',
      height: 0,
      width: '100%',
      outline: 'none',
      appearance: 'none',
      tapHighlightColor: 'transparent',

      '&::-webkit-slider-thumb': {
        appearance: 'none',
        tapHighlightColor: 'transparent',
        backgroundColor: 'rgb(54, 124, 243)',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        height: 28,
        width: 28,
        marginTop: 4,
        pointerEvents: 'all',
        position: 'relative',
      },

      '&::-moz-range-thumb': {
        appearance: 'none',
        tapHighlightColor: 'transparent',
        backgroundColor: 'rgb(54, 124, 243)',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        height: 28,
        width: 28,
        marginTop: 4,
        pointerEvents: 'all',
        position: 'relative',
      },
    },
  },
  thumbLeft: {
    zIndex: 3,
  },
  thumbRight: {
    zIndex: 4,
  },
  slider: {
    position: 'relative',
    width: '100%',
  },
  sliderTrack: {
    position: 'absolute',
    borderRadius: 3,
    height: 3,
    backgroundColor: '#ced4da',
    width: '100%',
    zIndex: 1,
  },
  sliderRange: {
    position: 'absolute',
    borderRadius: 3,
    height: 3,
    backgroundColor: '#767779',
    zIndex: 2,
  },
};

MultiRangeSlider.propTypes = {
  minRange: PropTypes.number.isRequired,
  maxRange: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyle(style)(observer(MultiRangeSlider));
