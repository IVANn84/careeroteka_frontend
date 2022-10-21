import React, {Children, useState} from 'react';

export default function Spoiler({
    children,
    size,
    
    classes,
}) {
    if (Array.isArray(children)) {
        const [page, setPage] = useState(0);
        const {length} = children;
        const limit = (page + 1) * size;
        
        const click = () => setPage(page + 1);
        
        return (
            <>
                {Children.map(children, (child, index) => index < limit ? child : null)}
                {length > limit
                    ? (
                        <load-more
                            class={classes.container}
                            onClick={click}>
                            И еще {length - limit} ...
                        </load-more>
                    )
                    : null}
            </>
        );
    }
    
    return children;
}
