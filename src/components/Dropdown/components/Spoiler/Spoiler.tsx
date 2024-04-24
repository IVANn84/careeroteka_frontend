import React, { Children, useState } from 'react';

import { onEnter } from 'Util/onEnter';

interface Props {
  children: React.ReactNode;
  showNextButton?: boolean;
  size: number;
  classes: {[className: string]: string};
  // eslint-disable-next-line react/no-unused-prop-types
  mode: 'light' | 'primary';
}

export default function Spoiler({
  children,
  showNextButton = true,
  size,

  classes,
}: Props) {
  const [page, setPage] = useState(0);

  if (Array.isArray(children)) {
    const { length } = children;
    const limit = (page + 1) * size;

    const click = () => setPage(page + 1);

    return (
      <>
        {Children.map(children, (child, index) => (index < limit ? child : null))}
        {showNextButton && length > limit
          ? (
            <div
              className={classes.container}
              onClick={click}
              onKeyDown={onEnter(click)}
              role="button"
              tabIndex={0}
            >
              И еще
              {' '}
              {length - limit}
              {' '}
              ...
            </div>
          )
          : null}
      </>
    );
  }

  return children;
}
