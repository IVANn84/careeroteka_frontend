import React, {useMemo, useState} from 'react';

import {useDebouncedValue} from 'Hook/useDebouncedValue';
import Typography from 'Component/Typography';
import Spoiler from '../Spoiler';
import Option from '../Option';
import TextsSkeleton from './components/TextsSkeleton';

export default function Menu({
    spoilerSize = 50,
    options,
    selectedId,
    checkIsSelected,
    isOpen,
    isLoading,
    isSearchable,
    closeOnSelect = true,
    mode,
    
    onSelect,
    toggle,
    
    classes,
}) {
    const [search, setSearch] = useState('');
    
    const debouncedSearch = useDebouncedValue(search, 300);
    
    const optionClick = option => {
        onSelect?.(option);
        closeOnSelect && toggle();
    };
    
    const optionChildren = useMemo(() => {
        const filteredOptions = options
            .filter(({name}) => name.toLowerCase().includes(debouncedSearch.toLowerCase()));
        return filteredOptions.length
            ? filteredOptions.map(option => (
                <Option
                    key={option.id}
                    tabIndex={0}
                    value={option.optionValue || option.name}
                    isSelected={checkIsSelected
                        ? checkIsSelected(option)
                        : selectedId === option.id}
                    onSelect={() => optionClick(option)}/>
            ))
            : (
                <Typography
                    variant='B2'
                    variantMobile='B2'
                    className={classes.placeholder}>
                    Ничего не найдено
                </Typography>
            );
    }, [options, debouncedSearch, isOpen, selectedId, checkIsSelected, isLoading]);
    
    return isOpen && (
        <div className={classes.container}>
            <div className={classes.menu}>
                <TextsSkeleton isDisplayed={isLoading}>
                    {isSearchable && (
                        <div className={classes.search}>
                            <input
                                type='text'
                                placeholder='Поиск'
                                value={search}
                                onChange={({target: {value}}) => setSearch(value)}/>
                        </div>
                    )}
                    <div className={classes.options}>
                        <Spoiler
                            mode={mode}
                            size={spoilerSize}>
                            {optionChildren}
                        </Spoiler>
                    </div>
                </TextsSkeleton>
            </div>
        </div>
    );
}