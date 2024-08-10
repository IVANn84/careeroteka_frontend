import React, { useState } from 'react';

import { AccordionProps } from './accordion-item/types';
import AccordionItem from './accordion-item';

export default function Accordion({ classes, className, items }: AccordionProps) {
  const [openId, setOpenId] = useState<null | number>(null);

  const onClick = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <ul className={`${classes.accordion} ${className || ''}`}>
      {items.map((item, id) => (
        <AccordionItem
          isOpen={openId === id}
          item={item}
          // eslint-disable-next-line react/no-array-index-key
          key={id}
          onClick={() => onClick(id)}
        />
      ))}
    </ul>
  );
}
