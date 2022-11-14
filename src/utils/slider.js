import {useEffect} from 'react';

export function InitSlider({$slider, $sliderButtonLeft = null, $sliderButtonRight = null}) {
    const getFullDisplayed = ($slider, slides) =>
        slides.reduce((result, $slide, index) => {
            const position = $slide.getBoundingClientRect();
            
            if (position.left >= 0 && position.right <= $slider.offsetWidth) {
                if (result.firstIndex === null) {
                    result.firstIndex = index;
                }
                result.lastIndex = index;
            }
            
            return result;
        }, {firstIndex: null, lastIndex: null});
    
    useEffect(() => {
        const slides = $slider.current && [...$slider.current.querySelectorAll('*')] || [];
        
        if ($slider.current
            && (!slides.length
                || getFullDisplayed($slider.current, slides).lastIndex === slides.length - 1)) {
            if ($sliderButtonLeft?.current) {
                $sliderButtonLeft.current.style.display = 'none';
            }
            if ($sliderButtonRight?.current) {
                $sliderButtonRight.current.style.display = 'none';
            }
        }
        
        const slideToRight = async () => {
            const {lastIndex} = getFullDisplayed($slider.current, slides);
            
            if (lastIndex === slides.length - 1) {
                return;
            }
            
            slides[lastIndex + 1].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
            });
        };
        
        const slideToLeft = () => {
            const {firstIndex} = getFullDisplayed($slider.current, slides);
            
            if (firstIndex === 0) {
                return;
            }
            
            slides[firstIndex - 1].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'end',
            });
        };
        
        if ($sliderButtonLeft?.current) {
            $sliderButtonLeft.current.addEventListener('click', slideToLeft);
        }
        if ($sliderButtonRight?.current) {
            $sliderButtonRight.current.addEventListener('click', slideToRight);
        }
        
        return () => {
            if ($sliderButtonRight?.current) {
                $sliderButtonRight.current.removeEventListener('click', slideToRight);
            }
            if ($sliderButtonLeft?.current) {
                $sliderButtonLeft.current.removeEventListener('click', slideToRight);
            }
        };
    }, []);
}
