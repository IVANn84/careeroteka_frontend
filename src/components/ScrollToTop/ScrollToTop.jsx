import { useLocation } from 'react-router';
import { useEffect } from 'react';

// Прокручивание страницы до верха при рендере
function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default ScrollToTop;
