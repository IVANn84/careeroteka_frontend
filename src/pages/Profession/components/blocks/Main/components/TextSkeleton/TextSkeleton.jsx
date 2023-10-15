import ContentLoader from 'react-content-loader';
import React from 'react';

function TextSkeleton({
  children,
  isDisplayed,
  height = 26,
}) {
  return isDisplayed
    ? (
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        height={height}
        speed={2}
        width="100%"
      >
        <rect
          height={height}
          rx="0"
          ry="0"
          width="100%"
          x="0"
          y="0"
        />
      </ContentLoader>
    )
    : children;
}

export default TextSkeleton;
