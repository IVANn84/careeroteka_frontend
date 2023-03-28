import React, {useEffect} from 'react';
import {useLocation} from 'react-router';

// Прокручивание страницы до верха при рендере
const ScrollToTop = ({children}) => {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <>
            {children}
        </>
    );
};

export default ScrollToTop;