import React, { Children, useState } from 'react';
import { onEnter } from 'Util/onEnter';

export default function Spoiler({
  children,
  showNextButton = true,
  size,

  classes,
}) {
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
              role="button"
              className={classes.container}
              tabIndex={0}
              onKeyDown={onEnter(click)}
              onClick={click}
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
