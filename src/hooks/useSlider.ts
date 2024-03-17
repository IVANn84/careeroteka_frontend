import React, { useEffect } from 'react';

/**
 *
 * @param $slider - Рефка блока слайдера
 * @param $sliderButtonLeft - Рефка кнопки пролистать влево
 * @param $sliderButtonRight - Рефка кнопки пролистать вправо
 * @param {Array} slideList - Список элементов
 */
interface Params {
  $slider: React.RefObject<HTMLElement> | null;
  $sliderButtonLeft?: React.RefObject<HTMLElement> | null;
  $sliderButtonRight?: React.RefObject<HTMLElement> | null;
  currentArticleId?: number;
  slideList?: any[];
}

export function useSlider({
  $slider,
  $sliderButtonLeft = null,
  $sliderButtonRight = null,
  slideList = [],
}: Params) {
  const getFullDisplayed = ($sliderLoaded, slides) => slides.reduce((result, $slide, index) => {
    const position = $slide.getBoundingClientRect();

    if (position.left >= 0 && position.right <= $sliderLoaded.offsetWidth) {
      if (result.firstIndex === null) {
        result.firstIndex = index;
      }
      result.lastIndex = index;
    }

    return result;
  }, { firstIndex: null, lastIndex: null });

  useEffect(() => {
    const slides = ($slider.current && [...$slider.current.querySelectorAll('*')]) || [];

    if ($slider.current
      && (!slides.length
        || getFullDisplayed($slider.current, slides).lastIndex === slides.length - 1)) {
      if ($sliderButtonLeft?.current) {
        $sliderButtonLeft.current.style.display = 'none';
      }
      if ($sliderButtonRight?.current) {
        $sliderButtonRight.current.style.display = 'none';
      }
    } else {
      if ($sliderButtonLeft?.current) {
        $sliderButtonLeft.current.style.display = 'block';
      }
      if ($sliderButtonRight?.current) {
        $sliderButtonRight.current.style.display = 'block';
      }
    }

    const slideToRight = async () => {
      const { lastIndex } = getFullDisplayed($slider.current, slides);

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
      const { firstIndex } = getFullDisplayed($slider.current, slides);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        $sliderButtonRight.current.removeEventListener('click', slideToRight);
      }
      if ($sliderButtonLeft?.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        $sliderButtonLeft.current.removeEventListener('click', slideToRight);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideList]);
}
