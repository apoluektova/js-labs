const createTagsBr = (someArray) => {
  return someArray.map((element) => {
    return `<b>${element}</b>`;
  });
};

module.exports = {
  createTagsBr,
};
