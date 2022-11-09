import React, {useState, useRef, useEffect} from 'react';

import Menu from './components/Menu';
import Value from './components/Value';

/**
 * Дропдаун
 * @param {Number?} maxHeight - Максимальная высота открывающегося списка
 * @param {(Boolean | String)?} error - Ошибка (String отобразится под инпутом, Boolean - только подсветит)
 * @param {Number} spoilerSize - Кол-во изначально отображающихся элементов в списке (на бОльшее кол-во будет выводиться "И еще {кол-во} ...")
 * @param {String?} className - Класс для стилей
 * @param {({id: *, name: (String | JSX.Element)} | {id: *, optionValue: (String | JSX.Element)})[]} options - Элементы списка
 * @param {String | JSX.Element} selectedValue - Выбранное значение
 * @param {*} selectedId - Выбранный id
 * @param {Boolean} isDisabled - Заблокирован ли
 * @param {Boolean} isLoading - Загружается ли список (отображается прелоадер в списке)
 * @param {Boolean} isSearchable - Есть ли поиск по списку
 * @param {Boolean} isDisplayed - Отображается ли дропдаун
 * @param {String} placeholder - Плейсхолдер
 * @param {Function} onSelect - Функция, вызывающаяся при нажатии на элемент списка (передается объект, по которому нажали)
 * @param classes
 * @returns {JSX.Element}
 */
export default function Dropdown ({
    maxHeight = 300,
    error,
    spoilerSize,
    className,
    options = [],
    selectedValue,
    selectedId,
    isDisabled,
    isLoading = false,
    isSearchable,
    isDisplayed = true,
    placeholder,
    
    onSelect,
    
    classes,
}) {
    if (!isDisplayed) {
        return null;
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const [isReversedY, setIsReversedY] = useState(false);
    const $domElement = useRef(null);
    
    const toggle = async () => {
        const {height, top} = $domElement.current.getBoundingClientRect();
        const reversedY = (height + maxHeight + top) > window.innerHeight && top > (height + maxHeight);
        setIsReversedY(reversedY);
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        return () => setIsOpen(false);
    }, [window.location.pathname]);
    
    return (
        <div
            className={`${classes.container} ${className || ''}`}
            ref={$domElement}>
            {!isDisabled && isOpen && (
                <div
                    className={classes.cloak}
                    onClick={toggle}/>
            )}
            <Value
                isDisabled={isDisabled}
                error={error}
                selectedValue={selectedValue}
                isOpen={isOpen}
                isReversedY={isReversedY}
                placeholder={placeholder}
                toggle={toggle}/>
            {!isDisabled && (
                <Menu
                    maxHeight={maxHeight}
                    isOpen={isOpen}
                    spoilerSize={spoilerSize}
                    isReversedY={isReversedY}
                    options={options}
                    selectedId={selectedId}
                    isSearchable={isSearchable}
                    toggle={toggle}
                    onSelect={onSelect}
                    isLoading={isLoading}/>
            )}
            {error && typeof error === 'string' && (
                <div
                    className={classes.error}
                    dangerouslySetInnerHTML={{__html: error}}/>
            )}
        </div>
    );
    
}