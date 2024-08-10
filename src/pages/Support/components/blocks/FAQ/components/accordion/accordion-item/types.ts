export interface AccordionItemType {
  title: string;
  content: string;
}

export interface AccordionProps {
  className?: string;
  items: AccordionItemType[];
  classes: {[className: string]: string};
}
