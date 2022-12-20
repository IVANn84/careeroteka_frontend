import React from 'react';

const Crop = ({
    value,
    quantity,
    isShowPart,
}) => {
    const partChildren = (value.length > quantity && isShowPart)
        ? Array.isArray(value)
            ? value.slice(0, quantity)
            : `${value.slice(0, quantity)}...`
        : value;
    
    return (
        Array.isArray(value)
            ? <div dangerouslySetInnerHTML={{__html: partChildren.join('<br/>')}}/>
            : <div>{partChildren}</div>
    );
};

export default Crop;