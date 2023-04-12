import {memo} from 'react';
import PropTypes from 'prop-types';

import Input from './Input.jsx';

// Инпут
const Component = memo(Input);

Component.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'password',
        'number',
        'money',
        'file',
        'textarea',
    ]).isRequired,
    isDisabled: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    isRequired: PropTypes.bool,
    placeholder: PropTypes.string,
    hasAutoFocus: PropTypes.bool,
    maxLength: PropTypes.number,
    isDisplayed: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onClear: PropTypes.func,
    classes: PropTypes.object,
    
    // Текстовый инпут
    hintMaxHeight: PropTypes.number,
    hintOptions: PropTypes.array,
    hintPlaceholder: PropTypes.string,
    hintIsLoading: PropTypes.bool,
    onHintSelect: PropTypes.func,
    hasHint: PropTypes.bool,
    
    // Денежный инпут
    // Можно ли вводить отрицательные числа
    hasNegative: PropTypes.bool,
    // Максимальное кол-во цифр до запятой
    intDigits: PropTypes.number,
    // Максимальное кол-во цифр после запятой
    precision: PropTypes.number,
    
    // Файловый инпут
    multiple: PropTypes.bool,
    children: PropTypes.node,
};

Component.defaultProps = {
    hintMaxHeight: 300,
    hintOptions: [],
    isDisplayed: true,
    hasHint: false,
    intDigit: 12,
    precision: 2,
    multiple: false,
};

export default Component;