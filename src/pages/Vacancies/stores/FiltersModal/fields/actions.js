import { applySnapshot, getParent, getSnapshot } from 'mobx-state-tree';

let initialState = {};

export default self => ({
  afterCreate() {
    initialState = getSnapshot(self);
  },

  reset() {
    applySnapshot(self, initialState);
    getParent(self).setIsFiltersChanged(false);
    getParent(getParent(self)).vacanciesStore.fetchVacancies();
  },

  resetTabs() {
    self.workFormat = [];
    self.companySize = [];
  },

  setTypeVacancy(value) {
    self.typeVacancy = value;
    getParent(self).setIsFiltersChanged(true);
  },

  setSearchValues(value) {
    self.searchValues = value;
    getParent(self).setIsFiltersChanged(true);
  },

  setSearchBy(value) {
    if (self.searchBy.includes(value)) {
      self.searchBy = self.searchBy.filter(item => item !== value);
    } else {
      self.searchBy.push(value);
    }
  },

  setExcludeValues(value) {
    self.excludeValues = value;
    getParent(self).setIsFiltersChanged(true);
  },

  setExcludeBy(value) {
    if (self.excludeBy.some(item => item === value)) {
      self.excludeBy = self.excludeBy.filter(item => item !== value);
    } else {
      self.excludeBy.push(value);
    }
  },

  setMinSalary(value) {
    if (value > self.maxSalary) {
      self.minSalary = self.maxSalary;
    } else {
      self.minSalary = value;
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setMaxSalary(value) {
    const { maxSalary } = getParent(self).vacanciesStore;

    if (value < self.minSalary) {
      self.maxSalary = self.minSalary;
    } else if (value > maxSalary) {
      self.maxSalary = maxSalary;
    } else {
      self.maxSalary = value;
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setExperience(value) {
    if (!value) {
      self.experience = [];
    } else if (self.experience.includes(value)) {
      self.experience = self.experience.filter(item => item !== value);
    } else {
      self.experience.push(value);
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setWorkFormat(value) {
    if (self.workFormat.includes(value)) {
      self.workFormat = self.workFormat.filter(item => item !== value);
    } else {
      self.workFormat.push(value);
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setWorkFormatForTabs(value) {
    self.resetTabs();
    self.workFormat.push(value);
    getParent(self).setIsFiltersChanged(true);
  },

  setEmploymentFormat(value) {
    if (self.employmentFormat.includes(value)) {
      self.employmentFormat = self.employmentFormat.filter(item => item !== value);
    } else {
      self.employmentFormat.push(value);
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setContractType(value) {
    if (self.contractType.includes(value)) {
      self.contractType = self.contractType.filter(item => item !== value);
    } else {
      self.contractType.push(value);
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setCompanySize(value) {
    if (self.companySize.includes(value)) {
      self.companySize = self.companySize.filter(item => item !== value);
    } else {
      self.companySize.push(value);
    }
    getParent(self).setIsFiltersChanged(true);
  },

  setCompanySizeForTabs(value) {
    self.resetTabs();
    self.companySize.push(value);
    getParent(self).setIsFiltersChanged(true);
  },

  toggleHasInsurance() {
    self.hasInsurance = !self.hasInsurance;
    getParent(self).setIsFiltersChanged(true);
  },

  toggleIsRelocationRequired() {
    self.isRelocationRequired = !self.isRelocationRequired;
    getParent(self).setIsFiltersChanged(true);
  },

  toggleIsAccredited() {
    self.isAccredited = !self.isAccredited;
    getParent(self).setIsFiltersChanged(true);
  },
});
