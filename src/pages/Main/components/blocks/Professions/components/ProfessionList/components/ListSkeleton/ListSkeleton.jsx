import React from 'react';
import ContentLoader from 'react-content-loader';
import {useDevice} from 'Hook/useDevice';

function ListItemSkeleton() {
    const deviceType = useDevice();
    
    return (
        <ContentLoader
            speed={2}
            width={deviceType === 'desktop' ? 260 : '100%'}
            height={260}
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'>
            <rect
                x='0'
                y='0'
                rx='32'
                ry='32'
                width={deviceType === 'desktop' ? 260 : '100%'}
                height={260}/>
        </ContentLoader>
    );
}

function ListSkeleton({isDisplayed}) {
    return isDisplayed && (
        <>
            <ListItemSkeleton/>
            <ListItemSkeleton/>
            <ListItemSkeleton/>
        </>
    );
}

export default ListSkeleton;