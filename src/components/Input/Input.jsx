import React from 'react';

import NumberInput from './components/NumberInput';
import TextInput from './components/TextInput';
import MoneyInput from './components/MoneyInput';
import PasswordInput from './components/PasswordInput';
import FileInput from './components/FileInput';
import TextArea from './components/TextArea';

const Input = React.forwardRef((props, ref) => {
  const {
    type,
  } = props;

  switch (type) {
    case 'number':
      return (<div ref={ref}><NumberInput {...props} /></div>);

    case 'money':
      return (<div ref={ref}><MoneyInput {...props} /></div>);

    case 'password':
      return (<div ref={ref}><PasswordInput {...props} /></div>);

    case 'file':
      return (<div ref={ref}><FileInput {...props} /></div>);

    case 'textarea':
      return (<div ref={ref}><TextArea {...props} /></div>);

    case 'text':
    default:
      return (<div ref={ref}><TextInput {...props} /></div>);
  }
});

export default Input;
