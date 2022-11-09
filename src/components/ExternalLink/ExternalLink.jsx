import React from 'react';


export default function ExternalLink({
    to,
    children,
    ...props
}) {
    return (
        <a
            href={to}
            rel="noopener noreferrer"
            {...props}>
            {children}
        </a>
    );
}