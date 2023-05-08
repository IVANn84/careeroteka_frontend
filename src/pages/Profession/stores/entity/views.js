export default self => ({
  get reviewBlocks() {
    const result = [];
    const array = self.entity?.reviews || [];

    for (let index = 0; index < array.length; index += 3) {
      result.push(array.slice(index, index + 3));
    }

    return result;
  },
});
