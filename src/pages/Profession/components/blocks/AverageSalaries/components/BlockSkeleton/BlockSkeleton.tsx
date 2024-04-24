import ContentLoader from 'react-content-loader';
import React from 'react';

function BlockSkeleton({
  children,
  isDisplayed,
}) {
  return isDisplayed
    ? (
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        height={100}
        speed={2}
        width="100%"
      >
        <rect
          height={100}
          rx="16"
          ry="16"
          width="100%"
          x="0"
          y="0"
        />
      </ContentLoader>
    )
    : children;
}

export default BlockSkeleton;
