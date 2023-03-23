import React from 'react';
import ContentLoader from 'react-content-loader';

function TextSkeleton() {
    return (
        <ContentLoader
            speed={2}
            width='100%'
            height={50}
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'>
            <rect
                x='0'
                y='0'
                rx='8'
                ry='8'
                width='100%'
                height={50}/>
        </ContentLoader>
    );
}

function TextsSkeleton({
    children,
    isDisplayed,
}) {
    return isDisplayed
        ? (
            <>
                <TextSkeleton/>
                <TextSkeleton/>
                <TextSkeleton/>
            </>
        )
        : children;
}

export default TextsSkeleton;