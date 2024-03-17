import ContentLoader from 'react-content-loader';
import React from 'react';

function IconSkeleton({
  isDisplayed,
  children,
}) {
  return isDisplayed
    ? (
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        height={24}
        speed={2}
        width={70}
      >
        <rect
          height={24}
          rx="0"
          ry="0"
          width={70}
          x="0"
          y="0"
        />
      </ContentLoader>
    )
    : children;
}

export default IconSkeleton;
