import React from 'react';
import ContentLoader from 'react-content-loader';

import {useDevice} from 'Hook/useDevice';

function ImageSkeleton({
    isDisplayed,
    children,
}) {
    const deviceType = useDevice();
    
    return isDisplayed
        ? (
            <ContentLoader
                speed={2}
                width={deviceType === 'desktop' ? 620 : '100%'}
                height={200}
                backgroundColor='#f3f3f3'
                foregroundColor='#ecebeb'>
                <rect
                    x='0'
                    y='0'
                    rx='0'
                    ry='0'
                    width={655}
                    height={200}/>
            </ContentLoader>
        )
        : children;
}

export default ImageSkeleton;