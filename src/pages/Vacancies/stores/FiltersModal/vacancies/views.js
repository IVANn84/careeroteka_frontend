export const stepBar = 40000;

export default self => ({
  get vacancyListDataChart() {
    const minValue = 0;
    const maxValue = self.maxSalary;

    const datasetLength = Math.ceil((maxValue - minValue) / stepBar);
    const dataset = [];

    for (let index = 0; index < datasetLength; index += 1) {
      if (index === 0) {
        dataset.push({
          label: minValue + stepBar,
          data: self.vacancyList
            .filter(value => value >= minValue && value < minValue + stepBar).length,
        });
      } else if (index === datasetLength - 1) {
        dataset.push({
          label: maxValue,
          data: self.vacancyList
            .filter(value => value >= dataset[index - 1].label && value <= maxValue).length,
        });
      } else {
        dataset.push({
          label: dataset[index - 1].label + stepBar,
          data: self.vacancyList
            .filter(value => value >= dataset[index - 1].label
              && value < dataset[index - 1].label + stepBar)
            .length,
        });
      }
    }

    return {
      labels: dataset.map(({ label }) => label),
      datasets: [
        {
          data: dataset.map(({ data }) => data),
          categoryPercentage: 1,
          backgroundColor: '#86B0F8',
        },
      ],
    };
  },

  get maxSalary() {
    const max = Math.max(...self.vacancyList);
    return max > 500000
      ? max
      : 500000;
  },
});
