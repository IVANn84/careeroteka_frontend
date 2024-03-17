import React, { useId } from 'react';

import Typography from 'Component/Typography';

interface Props {
  isSelected: boolean;
  className?: string;
  isDisabled?: boolean;
  title?: React.ReactNode;
  onClick: (value: boolean) => void;
  classes: {[className: string]: string};
}

function Checkbox({
  title,
  isSelected,
  isDisabled,
  className,
  classes,
  onClick,
}: Props) {
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
