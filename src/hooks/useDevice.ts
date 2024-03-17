import { useEffect, useState } from 'react';

function getDeviceType(): 'desktop' | 'mobile' {
  return window.innerWidth <= 576
    ? 'mobile'
    : 'desktop';
}

// Получение типа устройства
export function useDevice(): 'desktop' | 'mobile' {
  const [device, setDevice] = useState(getDeviceType());

  useEffect(() => {
    const resizeHandler = () => {
      setDevice(getDeviceType());
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return device;
}
