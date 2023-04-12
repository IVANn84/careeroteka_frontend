import withStyle from 'react-jss';
import {memo} from 'react';

import Area from './Area.jsx';

const style = ({font}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 200,
        borderRadius: 8,
        padding: ({removeArea}) => 12 + !!removeArea,
        cursor: ({removeArea}) => !removeArea && 'pointer',
        border: ({removeArea}) => !removeArea && [[1, 'solid', font.color.regular]],
        background: ({removeArea}) => removeArea && font.color.alternative,
        color: ({removeArea}) => removeArea && font.color.light,
    },
    title: {
        wordBreak: 'break-word',
    },
    removeButton: {
        cursor: 'pointer',
    },
});

export default memo(withStyle(style)(Area));
