import React from 'react';

import Typography from 'Component/Typography';

// Отлов ошибок в приложении
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch() {
    this.setState({ error: 'Произошла ошибка' });
  }

  render() {
    const {
      state,
      props,
    } = this;

    if (state.error) {
      return (
        <Typography
          variant="B1"
          variantMobile="B1"
          className={props.className || ''}
          style={props.style || ''}
        >
          Произошла ошибка
        </Typography>
      );
    }
    return props.children;
  }
}

export default ErrorBoundary;
