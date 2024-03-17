import { useLocation } from 'react-router';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

// Прокручивание страницы до верха при рендере
function ScrollToTop({ children }: Props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default ScrollToTop;
