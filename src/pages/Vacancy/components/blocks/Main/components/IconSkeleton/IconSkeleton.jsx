import React from 'react';
import ContentLoader from 'react-content-loader';

function IconSkeleton({
  isDisplayed,
  children,
}) {
  return isDisplayed
    ? (
      <ContentLoader
        speed={2}
        width={70}
        height={24}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect
          x="0"
          y="0"
          rx="0"
          ry="0"
          width={70}
          height={24}
        />
      </ContentLoader>
    )
    : children;
}

export default IconSkeleton;
