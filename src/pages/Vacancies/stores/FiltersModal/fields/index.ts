import {
  applySnapshot, cast, getSnapshot, types,
} from 'mobx-state-tree';

import { filtersModalVacanciesStoreVacanciesPage } from 'Page/Vacancies/stores/FiltersModal/vacancies';

let initialState = {};

export const FiltersModalFieldsStoreModel = types
  .model('Fields', {
    isFiltersChanged: types.optional(types.boolean, false),
    filters: types.optional(types.model({
      // type: types.maybeNull(types.string),
      type: types.optional(types.string, 'vacancy'),
      searchValues: types.maybeNull(types.string),
      isAbroad: types.maybeNull(types.boolean),
      searchBy: types.optional(types.array(types.string), []),
      excludeValues: types.maybeNull(types.string),
      excludeBy: types.optional(types.array(types.string), []),
      minSalary: types.optional(types.number, 0),
      maxSalary: types.maybeNull(types.number),
      experience: types.optional(types.array(types.string), []),
      workFormat: types.optional(types.array(types.string), []),
      employmentFormat: types.optional(types.array(types.string), []),
      contractType: types.optional(types.array(types.string), []),
      companySize: types.optional(types.array(types.string), []),
      hasInsurance: types.maybeNull(types.boolean),
      isAccredited: types.maybeNull(types.boolean),
      isRelocationRequired: types.maybeNull(types.boolean),
      source: types.maybeNull(types.string),
    }), {}),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    function setIsFiltersChanged(value) {
      self.isFiltersChanged = value;
    }

    function resetTabs() {
      self.filters.workFormat = cast([]);
      self.filters.companySize = cast([]);
      setIsFiltersChanged(false);
    }

    function setTypeVacancy(value) {
      self.filters.type = value;
      setIsFiltersChanged(true);
    }

    function setSearchValues(value) {
      self.filters.searchValues = value;
      // setIsFiltersChanged(true);
    }

    function setSearchBy(value) {
      if (self.filters.searchBy.includes(value)) {
        self.filters.searchBy = cast(self.filters.searchBy.filter(item => item !== value));
      } else {
        self.filters.searchBy.push(value);
      }
    }

    function setIsAbroad(value) {
      self.filters.isAbroad = value;
    }

    function setExcludeValues(value) {
      self.filters.excludeValues = value;
      setIsFiltersChanged(true);
    }

    function setExcludeBy(value) {
      if (self.filters.excludeBy.some(item => item === value)) {
        self.filters.excludeBy = cast(self.filters.excludeBy.filter(item => item !== value));
      } else {
        self.filters.excludeBy.push(value);
      }
    }

    function setMinSalary(value) {
      if (value > self.filters.maxSalary) {
        self.filters.minSalary = self.filters.maxSalary;
      } else {
        self.filters.minSalary = value;
      }
      setIsFiltersChanged(true);
    }

    function setMaxSalary(value) {
      const { maxSalary } = filtersModalVacanciesStoreVacanciesPage;

      if (value < self.filters.minSalary) {
        self.filters.maxSalary = self.filters.minSalary;
      } else if (value > maxSalary()) {
        self.filters.maxSalary = maxSalary();
      } else {
        self.filters.maxSalary = value;
      }
    }

    function resetMaxSalary() {
      self.filters.maxSalary = null;
    }

    function setExperience(value) {
      if (!value) {
        self.filters.experience = cast([]);
      } else if (self.filters.experience.includes(value)) {
        self.filters.experience = cast(self.filters.experience.filter(item => item !== value));
      } else {
        self.filters.experience.push(value);
      }
      // setIsFiltersChanged(true);
    }

    function setWorkFormat(value) {
      if (!value) {
        self.filters.workFormat = cast([]);
      } else if (self.filters.workFormat.includes(value)) {
        self.filters.workFormat = cast(self.filters.workFormat.filter(item => item !== value));
      } else {
        self.filters.workFormat.push(value);
      }
      setIsFiltersChanged(true);
    }

    function setWorkFormatForTabs(value) {
      resetTabs();
      self.filters.workFormat.push(value);
      setIsFiltersChanged(true);
    }

    function setEmploymentFormat(value) {
      if (!value) {
        self.filters.employmentFormat = cast([]);
      } else if (self.filters.employmentFormat.includes(value)) {
        self.filters.employmentFormat = cast(
          self.filters.employmentFormat.filter(item => item !== value),
        );
      } else {
        self.filters.employmentFormat.push(value);
      }
      setIsFiltersChanged(true);
    }

    function setContractType(value) {
      if (!value) {
        self.filters.contractType = cast([]);
      } else if (self.filters.contractType.includes(value)) {
        self.filters.contractType = cast(self.filters.contractType.filter(item => item !== value));
      } else {
        self.filters.contractType.push(value);
      }
      setIsFiltersChanged(true);
    }

    function setCompanySize(value) {
      if (!value) {
        self.filters.companySize = cast([]);
      } else if (self.filters.companySize.includes(value)) {
        self.filters.companySize = cast(self.filters.companySize.filter(item => item !== value));
      } else {
        self.filters.companySize.push(value);
      }
      setIsFiltersChanged(true);
    }

    function setCompanySizeForTabs(value) {
      resetTabs();
      self.filters.companySize.push(value);
      setIsFiltersChanged(true);
    }

    function toggleHasInsurance() {
      self.filters.hasInsurance = !self.filters.hasInsurance;
      setIsFiltersChanged(true);
    }

    function toggleIsRelocationRequired() {
      self.filters.isRelocationRequired = !self.filters.isRelocationRequired;
      setIsFiltersChanged(true);
    }

    function toggleIsAccredited() {
      self.filters.isAccredited = !self.filters.isAccredited;
      setIsFiltersChanged(true);
    }

    return {
      afterCreate,
      reset,
      resetTabs,
      setTypeVacancy,
      setSearchValues,
      setSearchBy,
      setIsAbroad,
      setExcludeValues,
      setExcludeBy,
      setMinSalary,
      setMaxSalary,
      resetMaxSalary,
      setExperience,
      setWorkFormat,
      setWorkFormatForTabs,
      setEmploymentFormat,
      setContractType,
      setCompanySize,
      setCompanySizeForTabs,
      toggleHasInsurance,
      toggleIsAccredited,
      toggleIsRelocationRequired,
    };
  });

export const filtersModalFieldsStoreVacanciesPage = FiltersModalFieldsStoreModel.create();
