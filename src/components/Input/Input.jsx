import React from 'react';

import NumberInput from './components/NumberInput';
import TextInput from './components/TextInput';
import MoneyInput from './components/MoneyInput';
import PasswordInput from './components/PasswordInput';
import FileInput from './components/FileInput';
import TextArea from './components/TextArea';

export default function Input(props) {
    switch (props.type) {
        case 'number':
            return (<NumberInput {...props}/>);
        
        case 'money':
            return (<MoneyInput {...props}/>);
        
        case 'password':
            return (<PasswordInput {...props}/>);
        
        case 'file':
            return (<FileInput {...props}/>);
            
        case 'textarea':
            return (<TextArea {...props}/>);
        
        case 'text':
        default:
            return (<TextInput {...props}/>);
    }
}