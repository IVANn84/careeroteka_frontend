import {memo} from 'react';
import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import DropdownWrapper from './Dropdown.jsx';

export const dropdownStyle = ({font}) => ({
    container: {
        position: 'relative',
    },
    cloak: {
        zIndex: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
    },
    error: {
        marginTop: 5,
        fontSize: 15,
        color: font.color.negative,
        textAlign: 'end',
    },
});

const Component = memo(withStyle(dropdownStyle)(DropdownWrapper));

Component.propTypes = {
    maxHeight: PropTypes.number,
    error: PropTypes.string,
    className: PropTypes.object,
    options: PropTypes.array,
    selectedValue: PropTypes.string,
    selectedId: PropTypes.string,
    checkIsSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isSearchable: PropTypes.bool,
    isDisplayed: PropTypes.bool,
    isRequired: PropTypes.bool,
    placeholder: PropTypes.string,
    mode: PropTypes.string,
    onSelect: PropTypes.func,
    classes: PropTypes.object,
};

Component.defaultProps = {
    maxHeight: 300,
    options: [],
    isLoading: false,
    isDisplayed: true,
    mode: 'light',
};


export default Component;