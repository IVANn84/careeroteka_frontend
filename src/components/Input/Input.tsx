import React from 'react';

import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import PasswordInput from './components/PasswordInput';
import NumberInput from './components/NumberInput';
import MoneyInput from './components/MoneyInput';
import FileInput from './components/FileInput';

type Props = React.ComponentProps<typeof NumberInput>
  | React.ComponentProps<typeof PasswordInput>
  | React.ComponentProps<typeof MoneyInput>
  | React.ComponentProps<typeof TextInput>
  | React.ComponentProps<typeof TextArea>
  | React.ComponentProps<typeof FileInput>;

export default function Input(props: Props) {
  const {
    type,
  } = props;

  switch (type) {
    case 'number':
      return (<NumberInput {...props} />);

    case 'money':
      return (<MoneyInput {...props} />);

    case 'password':
      return (<PasswordInput {...props} />);

    case 'file':
      return (<FileInput {...props} />);

    case 'textarea':
      return (<TextArea {...props} />);

    case 'text':
    default:
      return (<TextInput {...props} />);
  }
}
