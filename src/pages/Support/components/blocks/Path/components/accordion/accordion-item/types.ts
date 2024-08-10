export interface AccordionItemType {
  title: string;
  content: any[];
}

export interface AccordionProps {
  className?: string;
  items: AccordionItemType[];
  classes: {[className: string]: string};
}
