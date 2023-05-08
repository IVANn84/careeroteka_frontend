import { useEffect, useState } from 'react';

function getDeviceType() {
  return window.innerWidth < 576
    ? 'mobile'
    : 'desktop';
}

/**
 * Получение типа устройства
 * @return {'mobile' | 'desktop'}
 */
export function useDevice() {
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
