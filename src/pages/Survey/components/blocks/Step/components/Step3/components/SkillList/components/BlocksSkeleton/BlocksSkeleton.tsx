import ContentLoader from 'react-content-loader';
import React from 'react';

function BlockSkeleton() {
  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={50}
      speed={2}
      width={200}
    >
      <rect
        height={50}
        rx="8"
        ry="8"
        width={200}
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
  return isDisplayed
    ? (
      <>
        <BlockSkeleton />
        <BlockSkeleton />
        <BlockSkeleton />
        <BlockSkeleton />
        <BlockSkeleton />
      </>
    )
    : children;
}

export default BlocksSkeleton;
