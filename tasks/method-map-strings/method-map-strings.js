const createTagsBr = (someArray) => {
  const newArray = someArray.map((element) => {
    return ("<b>" + element + "</b>");
  });

  return newArray;
};

module.exports = {
  createTagsBr,
};
