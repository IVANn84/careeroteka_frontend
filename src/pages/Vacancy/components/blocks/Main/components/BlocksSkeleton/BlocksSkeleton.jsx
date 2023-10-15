import ContentLoader from 'react-content-loader';
import React from 'react';

function BlockSkeleton() {
  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={38}
      speed={2}
      width={150}
    >
      <rect
        height={38}
        rx="16"
        ry="16"
        width={150}
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
