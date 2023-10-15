import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import EmploymentFormats from './EmploymentFormats.jsx';

const style = ({ font }) => ({
  title: {
    marginTop: 36,
    marginBottom: 16,
  },
  variants: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: 36,
  },
  variant: {
    cursor: 'pointer',
    padding: 12,
    borderRadius: 8,
    border: [1, 'solid', font.color.regular],
  },
  selected: {
    color: font.color.light,
    border: 'none',
    background: font.color.alternative,
    padding: 13,
  },
});

export default withStyle(style)(observer(EmploymentFormats));
