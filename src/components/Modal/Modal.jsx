import React, {useEffect, useRef, useState} from 'react';

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
    
    const onKeyDownCloak = ({key}) => {
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
        } else if ($modal.current) {
            // Ожидание завершения анимации при закрытии модалки
            const handleTransitionEnd = () => setIsInnerDisplayed(false);
    
            $modal.current.addEventListener('transitionend', handleTransitionEnd);
    
            return () => {
                $modal.current.removeEventListener('transitionend', handleTransitionEnd);
            };
        }
    }, [isDisplayed, $modal]);
    
    const onClickCloak = ({target}) => {
        if (target === $modal.current) {
            onClose();
        }
    };
    
    return (isDisplayed || isInnerDisplayed) && (
        <div
            ref={$modal}
            className={classes.cloak}
            onClick={onClickCloak}
            style={{opacity}}>
            <div className={`${classes.container} ${className || ''}`}>
                {children}
            </div>
        </div>
    );
}