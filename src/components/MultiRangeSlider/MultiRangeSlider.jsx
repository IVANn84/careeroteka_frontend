import React, { useCallback, useEffect, useRef } from 'react';

export default function MultiRangeSlider({
  className,
  minRange,
  maxRange,
  minValue,
  maxValue,
  step = 1,
  classes,
  onChange,
}) {
  const range = useRef(null);

  const getPercent = useCallback(
    value => Math.round(((value - minRange) / (maxRange - minRange)) * 100),
    [minRange, maxRange],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, maxValue, getPercent]);

  const onChangeLeft = event => {
    const value = Math.min(Number(event.target.value), maxValue);
    onChange({ min: value, max: maxValue });
  };

  const onChangeRight = event => {
    const value = Math.max(Number(event.target.value), minValue);
    onChange({ min: minValue, max: value });
  };

  const preventArrow = event => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className={`${classes.container} ${className || ''}`}>
      <input
        type="range"
        min={minRange}
        max={maxRange}
        value={minValue || 0}
        step={step}
        onChange={onChangeLeft}
        onKeyDown={preventArrow}
        className={classes.thumbLeft}
      />
      <input
        type="range"
        min={minRange}
        max={maxRange}
        value={maxValue || 0}
        step={step}
        onChange={onChangeRight}
        onKeyDown={preventArrow}
        className={classes.thumbRight}
      />

      <div className={classes.slider}>
        <div className={classes.sliderTrack} />
        <div ref={range} className={classes.sliderRange} />
      </div>
    </div>
  );
}
