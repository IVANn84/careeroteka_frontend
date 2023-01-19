import React from 'react';

export default function ExternalLink({
    to,
    children,
    target = '_blank',
    ...props
}) {
    return (
        <a
            href={to}
            rel='noopener noreferrer'
            target={target}
            {...props}>
            {children}
        </a>
    );
}