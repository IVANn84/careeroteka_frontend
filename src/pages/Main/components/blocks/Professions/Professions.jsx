import React from 'react';

import { useStoreMainPage } from 'Page/Main/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';

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
        className={classes.header}
        ref={ref}
      >
        <Typography
          component="h2"
          variant="H2"
          variantMobile="H3"
        >
          Найдите свою
          {' '}
          <span>профессию</span>
        </Typography>
      </div>
      <div className={classes.controls}>
        <Input
          className={classes.searchButton}
          isClearable
          isSearchable
          onChange={fieldsStore.setSearchProfession}
          onClear={() => professionsStore.fetchProfessions(false)}
          onSubmit={() => professionsStore.fetchProfessions(false)}
          placeholder="Поиск профессии"
          type="text"
          value={fieldsStore.searchProfession}
        />
        <Dropdown
          className={classes.areasDropdown}
          isDisabled={areasStore.isLoading}
          onSelect={fieldsStore.setArea}
          options={areasStore.values}
          placeholder="Выберите направление"
          selectedId={fieldsStore.areaId}
          selectedValue={fieldsStore.areaName}
        />
      </div>
      <ProfessionList />
    </div>
  );
}
