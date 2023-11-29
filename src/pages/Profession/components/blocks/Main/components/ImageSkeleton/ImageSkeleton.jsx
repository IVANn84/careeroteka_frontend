import ContentLoader from 'react-content-loader';
import React from 'react';

import { useDevice } from 'Hook/useDevice';

function ImageSkeleton({
  isDisplayed,
  children,
}) {
  const deviceType = useDevice();

  return isDisplayed
    ? (
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        height={200}
        speed={2}
        width={deviceType === 'desktop' ? 620 : '100%'}
      >
        <rect
          height={200}
          rx="0"
          ry="0"
          width={655}
          x="0"
          y="0"
        />
      </ContentLoader>
    )
    : children;
}

export default ImageSkeleton;
