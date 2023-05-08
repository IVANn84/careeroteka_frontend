import React from 'react';
import ContentLoader from 'react-content-loader';
import { useDevice } from 'Hook/useDevice';

function ListItemSkeleton() {
  const deviceType = useDevice();

  return (
    <ContentLoader
      speed={2}
      width={deviceType === 'desktop' ? 270 : '100%'}
      height={340}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect
        x="0"
        y="0"
        rx="32"
        ry="32"
        width={deviceType === 'desktop' ? 270 : '100%'}
        height={340}
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
