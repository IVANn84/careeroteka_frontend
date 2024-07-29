import React, { useEffect, useRef, useState } from 'react';

interface Props {
  isDisplayed: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: string;
  classes: {[className: string]: string};
}

export default function Modal({
  isDisplayed,

  onClose,

  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant,
  classes,
  children,
}: Props) {
  const $modal = useRef(null);

  const [opacity, setOpacity] = useState(0);
  // Флаг для отображения модалки, пока происходит анимация
  const [isInnerDisplayed, setIsInnerDisplayed] = useState(false);

  const onKeyDownCloak = ({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isDisplayed) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isDisplayed]);

  // Анимация открытия/закрытия
  useEffect(() => {
    setOpacity(isDisplayed ? 1 : 0);

    if (isDisplayed) {
      setIsInnerDisplayed(true);

      document.addEventListener('keydown', onKeyDownCloak);

      return () => {
        document.removeEventListener('keydown', onKeyDownCloak);
      };
    }
    if ($modal.current) {
      // Ожидание завершения анимации при закрытии модалки
      const handleTransitionEnd = () => setIsInnerDisplayed(false);

      $modal.current.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        $modal.current?.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisplayed, $modal.current]);

  const onClickCloak = ({ target }) => {
    if (target === $modal.current) {
      onClose();
    }
  };

  return (isDisplayed || isInnerDisplayed) && (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <div
      className={classes.cloak}
      onClick={onClickCloak}
      ref={$modal}
      role="complementary"
      style={{ opacity }}
    >
      <div className={`${classes.container} ${className || ''}`}>
        {children}
      </div>
    </div>
  );
}
