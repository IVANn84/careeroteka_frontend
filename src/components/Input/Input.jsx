import React from 'react';

import NumberInput from './components/NumberInput';
import TextInput from './components/TextInput';
import MoneyInput from './components/MoneyInput';
import PasswordInput from './components/PasswordInput';

export default function Input(props) {
    switch (props.type) {
        case 'number':
            return (<NumberInput {...props}/>);
        
        case 'money':
            return (<MoneyInput {...props}/>);
        
        case 'password':
            return (<PasswordInput {...props}/>);
        
        case 'text':
        default:
            return (<TextInput {...props}/>);
    }
}