import React, { useRef } from 'react';
import plus from 'Image/landing/plus.svg';
import minus from 'Image/landing/minus.svg';

import Typography from 'Component/Typography';

import { AccordionItemType } from './types';
import Card from '../../card';

interface AccordionItemProps {
  item: AccordionItemType;
  isOpen: boolean;
  onClick: () => void;
  classes: {[className: string]: string};
}
export default function AccordionItem({
  classes, item, isOpen, onClick,
}: AccordionItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <li className={classes.item}>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Open accordion section' : 'Close accordion section'}
        className={classes.button}
        onClick={onClick}
        style={{
          paddingBottom: isOpen && item.title === 'Оффер' ? 0 : 110,
        }}
        type="button"
      >
        <div className={classes.header}>
          <Typography component="p" variant="B2" variantMobile="B2" weight="semiBold">
            {item.title}
            {' '}
            <span className={classes.highlight}>
              &#183;
              {' '}
              {item.content.length}
            </span>
          </Typography>
          {isOpen ? <img alt="" className={classes.icon} src={minus} /> : <img alt="" src={plus} />}
        </div>
        <div
          className={classes.content}
          style={{
            height: isOpen ? Number(itemRef.current?.scrollHeight) + 20 : 0,
          }}
        >
          <div
            className={classes.body}
            ref={itemRef}
          >
            {item.content.map(card => (
              <Card key={card.name} {...card} />
            ))}
          </div>
        </div>
      </button>
    </li>
  );
}
