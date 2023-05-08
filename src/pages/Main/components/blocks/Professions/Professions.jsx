import React from 'react';

import { useStoreMainPage } from 'Page/Main/stores';

import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import Typography from 'Component/Typography';
import ProfessionList from './components/ProfessionList';

export default function Professions({
  classes,
}, ref) {
  const {
    areasStore,
    professionsStore,
    fieldsStore,
  } = useStoreMainPage();

  return (
    <div>
      <div
        ref={ref}
        className={classes.header}
      >
        <Typography
          variant="H2"
          variantMobile="H3"
          component="h2"
        >
          Найдите свою
          {' '}
          <span>профессию</span>
        </Typography>
      </div>
      <div className={classes.controls}>
        <Input
          className={classes.searchButton}
          type="text"
          placeholder="Поиск профессии"
          value={fieldsStore.searchProfession}
          onChange={fieldsStore.setSearchProfession}
          onSubmit={() => professionsStore.fetchProfessions(false)}
          onClear={() => professionsStore.fetchProfessions(false)}
          isClearable
          isSearchable
        />
        <Dropdown
          className={classes.areasDropdown}
          placeholder="Выберите направление"
          options={areasStore.values}
          isDisabled={areasStore.isLoading}
          selectedId={fieldsStore.areaId}
          selectedValue={fieldsStore.areaName}
          onSelect={fieldsStore.setArea}
        />
      </div>
      <ProfessionList />
    </div>
  );
}
