import React from 'react';

function Crop({
  value,
  quantity,
  isShowPart,
}) {
  const partChildren = (() => {
    if (value.length > quantity && isShowPart) {
      return Array.isArray(value)
        ? value.slice(0, quantity)
        : `${value.slice(0, quantity)}...`;
    }

    return value;
  })();

  return (
    Array.isArray(value)
      // eslint-disable-next-line react/no-danger
      ? <div dangerouslySetInnerHTML={{ __html: partChildren.join('<br/>') }} />
      : <div>{partChildren}</div>
  );
}

export default Crop;
