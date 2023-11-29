import ContentLoader from 'react-content-loader';
import React from 'react';

// Скелетон прелоадер страницы
function Page({
  isDisplayed = true,
  children,
  ...props
}) {
  return isDisplayed
    ? (
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        height={650}
        speed={2}
        style={{ marginTop: 50 }}
        width="100%"
        {...props}
      >
        <rect height="20" rx="5" ry="5" width="40%" x="0" y="0" />
        <rect height="200" rx="5" ry="5" width="100%" x="0" y="42" />
        <rect height="10" rx="5" ry="5" width="100%" x="0" y="265" />
        <rect height="10" rx="5" ry="5" width="100%" x="0" y="285" />
        <rect height="10" rx="5" ry="5" width="100%" x="0" y="305" />
        <rect height="10" rx="5" ry="5" width="65%" x="0" y="335" />
        <rect height="10" rx="5" ry="5" width="10%" x="75%" y="335" />
        <rect height="10" rx="5" ry="5" width="65%" x="0" y="355" />
        <rect height="10" rx="5" ry="5" width="30%" x="75%" y="355" />
        <rect height="10" rx="5" ry="5" width="65%" x="0" y="375" />
        <rect height="10" rx="5" ry="5" width="30%" x="75%" y="375" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="395" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="395" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="415" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="415" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="445" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="445" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="465" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="465" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="485" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="485" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="505" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="505" />
        <rect height="8" rx="5" ry="5" width="65%" x="0" y="525" />
        <rect height="8" rx="5" ry="5" width="30%" x="75%" y="525" />
        <rect height="10" rx="5" ry="5" width="10%" x="75%" y="550" />
        <circle cx="76.5%" cy="590" r="18" />
        <circle cx="80%" cy="590" r="18" />
        <circle cx="83.5%" cy="590" r="18" />
        <circle cx="87%" cy="590" r="18" />
        <circle cx="90.5%" cy="590" r="18" />
        <circle cx="94%" cy="590" r="18" />
      </ContentLoader>
    )
    : children;
}

export default Page;
