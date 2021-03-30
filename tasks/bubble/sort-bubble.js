const sortByBubble = (someArray) => {
  const sortedArray = someArray.slice();

  for (let i = 1; i < sortedArray.length; i ++ ) {
    for (let j = 0; j < sortedArray.length - 1; j++) {
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
