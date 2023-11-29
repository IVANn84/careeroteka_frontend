import ContentLoader from 'react-content-loader';
import React from 'react';

import { useDevice } from 'Hook/useDevice';

function BlockSkeleton() {
  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={190}
      speed={2}
      width="100%"
    >
      <rect
        height={190}
        rx="16"
        ry="16"
        width="100%"
        x="0"
        y="0"
      />
    </ContentLoader>
  );
}

function BlocksSkeleton({
  children,
  isDisplayed,
}) {
  const deviceType = useDevice();

  return isDisplayed
    ? (
      <>
        <BlockSkeleton />
        {deviceType === 'desktop' && (
        <BlockSkeleton />
        )}
      </>
    )
    : children;
}

export default BlocksSkeleton;
