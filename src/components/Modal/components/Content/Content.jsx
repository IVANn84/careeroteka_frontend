import React from 'react';

import Divider from 'Component/Divider';

export default function Content({
    classes,
    children,
}) {
    return (
        <>
            <div className={classes.container}>
                {children}
            </div>
            <Divider/>
        </>
    );
}