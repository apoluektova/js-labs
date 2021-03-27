const {sortByBubble} = require('./sort-bubble');

describe('sortByBubble', () => {
  it('Should be a function', () => {
    expect(typeof sortByBubble).toEqual('function');
  });

  it('Should return new array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = [1, 2, 3, 4, 5];

    expect(sortByBubble(input)).notEqual(output);
  });

  it('Should return correct result', () => {
    it('Example 1', () => {
      const input = [1, 2, 3, 4, 5];
      const output = [1, 2, 3, 4, 5];

      expect(sortByBubble(input)).toEqual(output);
    });

    it('Example 2', () => {
      const input = [5, 4, 3, 2, 1];
      const output = [1, 2, 3, 4, 5];

      expect(sortByBubble(input)).toEqual(output);
    });

    it('Example 3', () => {
      const input = [3, 5, 1, 2, 4];
      const output = [1, 2, 3, 4, 5];

      expect(sortByBubble(input)).toEqual(output);
    });
  });
});
