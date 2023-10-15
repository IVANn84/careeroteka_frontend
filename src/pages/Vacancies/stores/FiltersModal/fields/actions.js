import { applySnapshot, getParent, getSnapshot } from 'mobx-state-tree';

let initialState = {};

export default self => ({
  afterCreate() {
    initialState = getSnapshot(self);
  },

  reset() {
    applySnapshot(self, initialState);
  },

  setTypeVacancy(value) {
    self.typeVacancy = value;
  },

  setSearchWords(value) {
    self.searchWords = value;
  },

  setSearchAt(value) {
    if (self.searchAt.includes(value)) {
      self.searchAt = self.searchAt.filter(item => item !== value);
    } else {
      self.searchAt.push(value);
    }
  },

  setExcludeWords(value) {
    self.excludeWords = value;
  },

  setExcludeAt(value) {
    if (self.excludeAt.some(item => item === value)) {
      self.excludeAt = self.excludeAt.filter(item => item !== value);
    } else {
      self.excludeAt.push(value);
    }
  },

  setMinSalary(value) {
    if (value > self.maxSalary) {
      self.minSalary = self.maxSalary;
    } else {
      self.minSalary = value;
    }
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
  },

  setGradesVacancy(value) {
    if (self.gradesVacancy.includes(value)) {
      self.gradesVacancy = self.gradesVacancy.filter(item => item !== value);
    } else {
      self.gradesVacancy.push(value);
    }
  },

  setWorkFormats(value) {
    if (self.workFormats.includes(value)) {
      self.workFormats = self.workFormats.filter(item => item !== value);
    } else {
      self.workFormats.push(value);
    }
  },

  setEmploymentFormats(value) {
    if (self.employmentFormats.includes(value)) {
      self.employmentFormats = self.employmentFormats.filter(item => item !== value);
    } else {
      self.employmentFormats.push(value);
    }
  },

  setEmployabilityFormats(value) {
    if (self.employabilityFormats.includes(value)) {
      self.employabilityFormats = self.employabilityFormats.filter(item => item !== value);
    } else {
      self.employabilityFormats.push(value);
    }
  },

  setCompanySizes(value) {
    if (self.companySizes.includes(value)) {
      self.companySizes = self.companySizes.filter(item => item !== value);
    } else {
      self.companySizes.push(value);
    }
  },

  setCharacteristics(value) {
    if (self.characteristics.includes(value)) {
      self.characteristics = self.characteristics.filter(item => item !== value);
    } else {
      self.characteristics.push(value);
    }
  },
});
