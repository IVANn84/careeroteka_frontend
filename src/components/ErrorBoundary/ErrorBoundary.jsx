import React from 'react';

import Typography from 'Component/Typography';

// Отлов ошибок в приложении
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
    }
    
    componentDidCatch() {
        this.setState({error: 'Произошла ошибка'});
    }
    
    render() {
        if (this.state.error) {
            return (
                <Typography
                    variant='B1'
                    variantMobile='B1'
                    className={this.props.className || ''}
                    style={this.props.style || ''}>
                    Произошла ошибка
                </Typography>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;