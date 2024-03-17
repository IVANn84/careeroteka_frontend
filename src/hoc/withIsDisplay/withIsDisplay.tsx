import React from 'react';

const withIsDisplay = Component => function (props) {
  const { isDisplay = true } = props;

  return isDisplay
    ? (<Component {...props} />)
    : null;
};

export default withIsDisplay;
