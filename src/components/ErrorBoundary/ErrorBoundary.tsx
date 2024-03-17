import React from 'react';

import Typography from 'Component/Typography';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface State {
  error: string | null;
}

// Отлов ошибок в приложении
class ErrorBoundary extends React.Component<Props, State> {
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
          className={props.className || ''}
          style={props.style}
          variant="B1"
          variantMobile="B1"
        >
          Произошла ошибка
        </Typography>
      );
    }
    return props.children;
  }
}

export default ErrorBoundary;
