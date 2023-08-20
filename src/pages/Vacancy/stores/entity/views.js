export default self => ({
  get tags() {
    const result = [];

    if (self.entity.city) {
      result.push(self.entity.city);
    }
    if (self.entity.workFormat) {
      result.push(self.entity.workFormat);
    }
    if (self.entity.employmentFormat) {
      result.push(self.entity.employmentFormat);
    }
    result.push('Вакансия');

    return result;
  },
});
