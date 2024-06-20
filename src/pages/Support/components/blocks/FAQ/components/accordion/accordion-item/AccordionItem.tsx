import React, { useRef } from 'react';
import chevron from 'Image/landing/chevron.svg';

import Typography from 'Component/Typography';

import { AccordionItemType } from './types';

interface AccordionItemProps {
  item: AccordionItemType;
  isOpen: boolean;
  onClick: () => void;
  classes: {[className: string]: string};
}
export default function AccordionItem({
  classes, item, isOpen, onClick,
}: AccordionItemProps) {
  const itemRef = useRef<HTMLSpanElement>(null);

  return (
    <li className={classes.item}>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Open accordion section' : 'Close accordion section'}
        className={classes.button}
        onClick={onClick}
        type="button"
      >
        <div className={classes.header}>
          <Typography component="p" variant="B1" variantMobile="C1">{item.title}</Typography>
          <img alt="" className={`${isOpen ? classes.chevron_open : ''} ${classes.chevron}`} src={chevron} />
        </div>
        <p
          className={classes.content}
          style={{
            height: isOpen ? itemRef.current?.scrollHeight : 0,
          }}
        >
          <span
            className={classes.body}
            ref={itemRef}
          >
            {item.content}
          </span>
        </p>
      </button>
    </li>
  );
}
