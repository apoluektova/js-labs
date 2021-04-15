const sortByBubble = (someArray) => {
  const sortedArray = someArray.slice();

  for (let i = sortedArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const tempVariable = sortedArray[j + 1];
        sortedArray[j + 1] = sortedArray[j];
        sortedArray[j] = tempVariable;
      }
    };
  };

  return sortedArray;
};


module.exports = {
  sortByBubble,
};
