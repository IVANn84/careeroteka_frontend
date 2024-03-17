import ContentLoader from 'react-content-loader';
import React from 'react';

import { useDevice } from 'Hook/useDevice';

function ListItemSkeleton() {
  const deviceType = useDevice();

  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={340}
      speed={2}
      width={deviceType === 'desktop' ? 270 : '100%'}
    >
      <rect
        height={340}
        rx="32"
        ry="32"
        width={deviceType === 'desktop' ? 270 : '100%'}
        x="0"
        y="0"
      />
    </ContentLoader>
  );
}

function ListSkeleton() {
  return (
    <>
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
    </>
  );
}

export default ListSkeleton;
