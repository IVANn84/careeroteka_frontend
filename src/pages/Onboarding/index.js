import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Onboarding from './Onboarding.jsx';

const style = {
    container: {
        display: 'flex',
        flex: 1,
    },
};

export default withStyle(style)(observer(Onboarding));