import React, { Children, useState } from 'react';

import { onEnter } from 'Util/onEnter';

import Crop from './components/Crop';

interface Props {
  children: React.ReactNode;
  quantity?: number;
  expandText?: string;
  classes: {[className: string]: string};
}

function LinkDropdown({
  children,
  quantity = 50,
  expandText = 'Подробнее',

  classes,
}: Props) {
  const [isShowPart, setIsShowPart] = useState(
    children != null && Children.count(children) > quantity,
  );

  return (children !== null)
    ? (
      <div>
        <Crop
          isShowPart={isShowPart}
          quantity={quantity}
          value={children}
        />
        {isShowPart && (
        <button
          className={classes.link}
          hidden={(Children.count(children) <= quantity) && !isShowPart}
          onClick={() => setIsShowPart(!isShowPart)}
          onKeyDown={onEnter(() => setIsShowPart(!isShowPart))}
          type="button"
        >
          {expandText}
        </button>
        )}
      </div>
    )
    : null;
}

export default LinkDropdown;
