import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import relocationImage from 'Image/articles/relocation.svg';
import buildCareerPlanImage from 'Image/articles/build-career-plan.svg';
import aboutUsImage from 'Image/articles/about-us.svg';

import { useSlider } from 'Hook/useSlider';

const articleList = [
  {
    id: 1,
    image: relocationImage,
  },
  {
    id: 2,
    image: aboutUsImage,
  },
  {
    id: 3,
    image: buildCareerPlanImage,
  },
];

interface Props {
  buttonRightRef?: React.RefObject<HTMLElement>;
  buttonLeftRef?: React.RefObject<HTMLElement>;
  currentArticleId?: number;
  classes: {[className: string]: string};
}

export default function ArticlesSlider({
  buttonRightRef,
  buttonLeftRef,
  currentArticleId,

  classes,
}: Props) {
  const $slider = useRef(null);
  useSlider({
    $slider,
    $sliderButtonRight: buttonRightRef,
    $sliderButtonLeft: buttonLeftRef,
  });

  return (
    <div
      className={classes.slider}
      ref={$slider}
    >
      {articleList
        .filter(({ id }) => id !== currentArticleId)
        .map(({ id, image }) => (
          <Link
            key={id}
            style={{ backgroundImage: `url(${image})` }}
            target="_blank"
            to={`/article/${id}`}
          />
        ))}
    </div>
  );
}
