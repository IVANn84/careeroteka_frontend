import React from 'react';
import ContentLoader from 'react-content-loader';

function TextSkeleton({
  children,
  isDisplayed,
  height = 26,
}) {
  return isDisplayed
    ? (
      <ContentLoader
        speed={2}
        width="100%"
        height={height}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect
          x="0"
          y="0"
          rx="0"
          ry="0"
          width="100%"
          height={height}
        />
      </ContentLoader>
    )
    : children;
}

export default TextSkeleton;
