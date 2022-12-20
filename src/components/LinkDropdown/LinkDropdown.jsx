import React, {useState} from 'react';

import Crop from './components/Crop';

const LinkDropdown = ({
    children,
    quantity = 50,
    expandText = 'Подробнее',
    
    classes,
}) => {
    const [isShowPart, setIsShowPart] = useState(children != null && children.length > quantity);
    
    return (children !== null)
        ? (
            <div>
                <Crop
                    value={children}
                    quantity={quantity}
                    isShowPart={isShowPart}/>
                {isShowPart && (
                    <a
                        className={classes.link}
                        hidden={(children.length <= quantity) && !isShowPart}
                        onClick={() => setIsShowPart(!isShowPart)}>
                        {expandText}
                    </a>
                )}
            </div>
        )
        : null;
};

export default LinkDropdown;
