import ContentLoader from 'react-content-loader';
import React from 'react';

function ListItemSkeleton() {
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
