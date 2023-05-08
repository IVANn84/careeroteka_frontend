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
          value={children}
          quantity={quantity}
          isShowPart={isShowPart}
        />
        {isShowPart && (
        <button
          type="button"
          className={classes.link}
          hidden={(children.length <= quantity) && !isShowPart}
          onKeyDown={onEnter(() => setIsShowPart(!isShowPart))}
          onClick={() => setIsShowPart(!isShowPart)}
        >
          {expandText}
        </button>
        )}
      </div>
    )
    : null;
}

export default LinkDropdown;
