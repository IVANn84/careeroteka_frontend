import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import CompanySize from './CompanySize';

const style = ({ font, chip }) => ({
  title: {
    marginBottom: 16,
  },
  variants: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: 28,
  },
  variant: {
    cursor: 'pointer',
    padding: 12,
    borderRadius: 8,
    border: chip.border,
  },
  selected: {
    color: font.color.light,
    border: 'none',
    background: font.color.alternative,
    padding: 13,
  },

  '@media screen and (max-device-width: 576px)': {
    title: {
      marginTop: 28,
      marginBottom: 12,
    },
  },
});

export default withStyle(style)(observer(CompanySize));
