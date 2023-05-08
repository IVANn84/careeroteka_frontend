import React, { useEffect, useRef, useState } from 'react';

export default function Modal({
  isDisplayed,

  onClose,

  className,
  classes,
  children,
}) {
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
    setOpacity(isDisplayed ? 1 : 0);

    if (isDisplayed) {
      setIsInnerDisplayed(true);

      document.addEventListener('keydown', onKeyDownCloak);

      return () => {
        document.removeEventListener('keydown', onKeyDownCloak);
      };
    } if ($modal.current) {
      // Ожидание завершения анимации при закрытии модалки
      const handleTransitionEnd = () => setIsInnerDisplayed(false);

      $modal.current.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        $modal.current.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisplayed, $modal]);

  const onClickCloak = ({ target }) => {
    if (target === $modal.current) {
      onClose();
    }
  };

  return (isDisplayed || isInnerDisplayed) && (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <div
      role="complementary"
      ref={$modal}
      className={classes.cloak}
      onClick={onClickCloak}
      style={{ opacity }}
    >
      <div className={`${classes.container} ${className || ''}`}>
        {children}
      </div>
    </div>
  );
}
