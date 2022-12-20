import React from 'react';
import ContentLoader from 'react-content-loader';

import {useDevice} from 'Hook/useDevice';

function BarChartSkeleton({
    isDisplayed,
    children,
}) {
    const deviceType = useDevice();
    
    return isDisplayed
        ? (
            <ContentLoader
                width='100%'
                height={deviceType === 'desktop' ? 250 : 160}
                backgroundColor='#f3f3f3'
                foregroundColor='#ecebeb'>
                <rect x='0' y='30%' rx='0' ry='0' width='20%' height='70%'/>
                <rect x='25%' y='70%' rx='0' ry='0' width='20%' height='30%'/>
                <rect x='50%' y='10%' rx='0' ry='0' width='20%' height='90%'/>
                <rect x='75%' y='50%' rx='0' ry='0' width='20%' height='50%'/>
            </ContentLoader>
        )
        : children;
}

export default BarChartSkeleton;