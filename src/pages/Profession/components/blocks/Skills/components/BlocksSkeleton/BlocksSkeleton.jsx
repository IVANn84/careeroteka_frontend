import React from 'react';
import ContentLoader from 'react-content-loader';

function BlockSkeleton() {
    return (
        <ContentLoader
            speed={2}
            width={150}
            height={50}
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'>
            <rect
                x='0'
                y='0'
                rx='16'
                ry='16'
                width={150}
                height={50}/>
        </ContentLoader>
    );
}

function BlocksSkeleton({
    children,
    isDisplayed,
}) {
    return isDisplayed
        ? (
            <>
                <BlockSkeleton/>
                <BlockSkeleton/>
                <BlockSkeleton/>
                <BlockSkeleton/>
                <BlockSkeleton/>
            </>
        )
        : children;
}

export default BlocksSkeleton;