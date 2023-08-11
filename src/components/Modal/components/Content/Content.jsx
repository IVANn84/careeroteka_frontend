import React from 'react';

import Divider from 'Component/Divider';

export default function Content({
  hasDivider = true,
  className,
  children,
}) {
  return (
    <>
      <div className={className || ''}>
        {children}
      </div>
      {hasDivider && (<Divider />)}
    </>
  );
}
