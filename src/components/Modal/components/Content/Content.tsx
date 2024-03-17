import React from 'react';

import Divider from 'Component/Divider';

interface Props {
  children: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
}

export default function Content({
  hasDivider = true,
  className,
  children,
}: Props) {
  return (
    <>
      <div className={className || ''}>
        {children}
      </div>
      {hasDivider && (<Divider />)}
    </>
  );
}
