import { memo } from 'react';
import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import DropdownWrapper from './Dropdown.jsx';

export const dropdownStyle = ({ font }) => ({
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

// Выпадающий список
const Component = memo(withStyle(dropdownStyle)(DropdownWrapper));

Component.propTypes = {
  // Максимальная высота открывающегося списка
  maxHeight: PropTypes.number,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  // Кол-во изначально отображающихся элементов в списке
  // (на бОльшее кол-во будет выводиться "И еще {кол-во} ...")
  spoilerSize: PropTypes.number,
  // Элементы списка
  options: PropTypes.array.isRequired,
  // Выбранное значение
  selectedValue: PropTypes.string,
  // Необязательный, если есть checkIsSelected
  selectedId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  // Проверка, выбран ли элемент (если нужна логика, отличная от сравнения id)
  checkIsSelected: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisplayed: PropTypes.bool,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'primary']),
  onSelect: PropTypes.func.isRequired,
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
