import React, { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

// Внешняя ссылка
export default function ExternalLink({
  children,
  target = '_blank',
  ...props
}: Props) {
  return (
    <a
      rel="noopener noreferrer"
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
