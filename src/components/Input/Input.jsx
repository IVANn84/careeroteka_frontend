import React from 'react';

import NumberInput from './components/NumberInput';
import TextInput from './components/TextInput';
import MoneyInput from './components/MoneyInput';

export default function Input(props) {
    switch (props.type) {
        case 'number':
            return (<NumberInput {...props}/>);
        
        case 'money':
            return (<MoneyInput {...props}/>);
        
        case 'text':
        default:
            return (<TextInput {...props}/>);
    }
}