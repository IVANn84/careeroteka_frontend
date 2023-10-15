import ContentLoader from 'react-content-loader';
import React from 'react';

function TextSkeleton() {
  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={50}
      speed={2}
      width="100%"
    >
      <rect
        height={50}
        rx="8"
        ry="8"
        width="100%"
        x="0"
        y="0"
      />
    </ContentLoader>
  );
}

function TextsSkeleton({
  children,
  isDisplayed,
}) {
  return isDisplayed
    ? (
      <>
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </>
    )
    : children;
}

export default TextsSkeleton;
