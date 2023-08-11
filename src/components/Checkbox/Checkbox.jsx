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
          id={id}
          type="checkbox"
          checked={isSelected}
          disabled={isDisabled}
          onChange={() => onClick(!isSelected)}
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
