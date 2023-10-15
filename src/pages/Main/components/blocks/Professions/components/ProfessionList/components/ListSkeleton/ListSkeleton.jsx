import ContentLoader from 'react-content-loader';
import React from 'react';

import { useDevice } from 'Hook/useDevice';

function ListItemSkeleton() {
  const deviceType = useDevice();

  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={260}
      speed={2}
      width={deviceType === 'desktop' ? 260 : '100%'}
    >
      <rect
        height={260}
        rx="32"
        ry="32"
        width={deviceType === 'desktop' ? 260 : '100%'}
        x="0"
        y="0"
      />
    </ContentLoader>
  );
}

function ListSkeleton({ isDisplayed }) {
  return isDisplayed && (
    <>
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
    </>
  );
}

export default ListSkeleton;
