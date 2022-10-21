import React, {useEffect} from 'react';

import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import ProfessionList from './components/ProfessionList';

export default function Professions({
    searchProfession,
    areaId,
    areaName,
    areas,
    professions,
    
    dispatcher,
    dispatcher: {
        fetchAreaList,
        fetchProfessionList,
        updateSearchProfession,
        updateArea,
    },
    
    classes,
}) {
    useEffect(() => {
        fetchAreaList();
        fetchProfessionList();
    }, []);
    
    return (
        <div>
            <div className={classes.header}>
                <h2>
                    Найдите свою <span>профессию</span>
                </h2>
            </div>
            <div className={classes.controls}>
                <Input
                    className={classes.searchButton}
                    type="text"
                    placeholder="Поиск профессии"
                    value={searchProfession}
                    onChange={updateSearchProfession}
                    onSubmit={fetchProfessionList}
                    isClearable
                    isSearchable/>
                <Dropdown
                    className={classes.areasDropdown}
                    placeholder="Выберите направление"
                    options={areas.valueList}
                    isLoading={areas.isLoading}
                    selectedId={areaId}
                    selectedValue={areaName}
                    onSelect={updateArea}/>
            </div>
            <ProfessionList
                professions={professions}
                dispatcher={dispatcher}/>
        </div>
    );
}