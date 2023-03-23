import withStyle from 'react-jss';
import {memo} from 'react';

import Direction from './Direction.jsx';

const style = ({font}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 200,
        borderRadius: 8,
        padding: ({removeDirection}) => 12 + !!removeDirection,
        cursor: ({removeDirection}) => !removeDirection && 'pointer',
        border: ({removeDirection}) => !removeDirection && [[1, 'solid', font.color.regular]],
        background: ({removeDirection}) => removeDirection && font.color.alternative,
        color: ({removeDirection}) => removeDirection && font.color.light,
    },
    title: {
        wordBreak: 'break-word',
    },
    removeButton: {
        cursor: 'pointer',
    },
});

export default memo(withStyle(style)(Direction));
