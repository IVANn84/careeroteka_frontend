import ContentLoader from 'react-content-loader';
import React from 'react';

import { useDevice } from 'Hook/useDevice';

function BarChartSkeleton({
  isDisplayed,
  children,
}) {
  const deviceType = useDevice();

  return isDisplayed
    ? (
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        height={deviceType === 'desktop' ? 250 : 160}
        width="100%"
      >
        <rect height="70%" rx="0" ry="0" width="20%" x="0" y="30%" />
        <rect height="30%" rx="0" ry="0" width="20%" x="25%" y="70%" />
        <rect height="90%" rx="0" ry="0" width="20%" x="50%" y="10%" />
        <rect height="50%" rx="0" ry="0" width="20%" x="75%" y="50%" />
      </ContentLoader>
    )
    : children;
}

export default BarChartSkeleton;
