import React from 'react';
import ContentLoader from 'react-content-loader';

function ListItemSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={190}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect
        x="0"
        y="0"
        rx="16"
        ry="16"
        width="100%"
        height={190}
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