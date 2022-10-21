import React, {useMemo, useState} from 'react';

import Preloader from 'Component/Preloader';
import Spoiler from '../Spoiler';
import Option from '../Option';

export default function Menu({
    spoilerSize = 50,
    options,
    selectedId,
    isOpen,
    isLoading,
    isSearchable,
    closeOnSelect = true,
    
    onSelect,
    toggle,
    
    classes,
}) {
    const [search, setSearch] = useState('');
    
    const optionClick = option => {
        onSelect?.(option);
        closeOnSelect && toggle();
    };
    
    const optionChildren = useMemo(() => {
        const filteredOptions = options
            .filter(({name}) => name.toLowerCase().includes(search));
        return filteredOptions.length
            ? filteredOptions.map(option => (
                <Option
                    key={option.id}
                    value={option.optionValue || option.name}
                    isSelected={selectedId === option.id}
                    onSelect={() => optionClick(option)}/>
            ))
            : (
                <span className={classes.placeholder}>
                    Ничего не найдено
                </span>
            );
    }, [options, search, isOpen, selectedId]);
    
    return isOpen && (
        <div className={classes.container}>
            <div className={classes.menu}>
                <Preloader isDisplayed={isLoading}>
                    {isSearchable && (
                        <div className={classes.search}>
                            <input
                                type="text"
                                placeholder="Поиск"
                                value={search}
                                onChange={({target: {value}}) => setSearch(value)}/>
                        </div>
                    )}
                    <div className={classes.options}>
                        <Spoiler size={spoilerSize}>
                            {optionChildren}
                        </Spoiler>
                    </div>
                </Preloader>
            </div>
        </div>
    );
}