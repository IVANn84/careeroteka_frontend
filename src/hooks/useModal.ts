import { useCallback, useState } from 'react';

// Работа с модалкой
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(() => true), []);
  const close = useCallback(() => setIsOpen(() => false), []);

  return {
    isOpen,
    open,
    close,
  };
}
