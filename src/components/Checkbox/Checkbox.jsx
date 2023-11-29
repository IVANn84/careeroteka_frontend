import React, { useId } from 'react';

import Typography from 'Component/Typography';

function Checkbox({
  title,
  isSelected,
  isDisabled,
  className,
  classes,
  onClick,
}) {
  const id = useId();

  return (
    <div className={`${classes.container} ${className || ''}`}>
      <label htmlFor={id}>
        <input
          checked={isSelected}
          disabled={isDisabled}
          id={id}
          onChange={() => onClick(!isSelected)}
          type="checkbox"
        />
        <Typography
          variant="B1"
          variantMobile="B2"
        >
          {title}
        </Typography>
      </label>
    </div>
  );
}
export default Checkbox;
