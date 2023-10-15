import React, { useState } from 'react';

import { onEnter } from 'Util/onEnter';

import Crop from './components/Crop';

function LinkDropdown({
  children,
  quantity = 50,
  expandText = 'Подробнее',

  classes,
}) {
  const [isShowPart, setIsShowPart] = useState(children != null && children.length > quantity);

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
          hidden={(children.length <= quantity) && !isShowPart}
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
