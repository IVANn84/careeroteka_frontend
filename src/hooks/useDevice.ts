import { useEffect, useState } from 'react';

function getDeviceType(): 'desktop' | 'tablet' | 'mobile' {
  if (window.innerWidth > 762) {
    return 'desktop';
  }
  if (window.innerWidth > 576) {
    return 'tablet';
  }
  return 'mobile';
}

export function useDevice(): ReturnType<typeof getDeviceType> {
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
