const {assert} = require('chai');
const {sortNumbers} = require('./method-sort-numbers');

describe('sortNumbers', () => {
  it('Should be a function', () => {
    assert.equal(typeof sortNumbers, 'function', 'Is not a function');
  });

  it('Should return new array', () => {
    const input = [1, 2, 3, 4, 5];
    const result = sortNumbers(input);

    assert.isOk(result instanceof Array, 'Result is not array');
  });

  it('Should not change original array', () => {
      const input = [2, 1, 3, 4, 5];
      const clonedInput = input.slice();

      sortNumbers(input);

      assert.deepEqual(input, clonedInput, 'Input after sorting is changed');
  });

  describe('Should return correct result', () => {
    it('Example 1', () => {
      const input = [1, 2, 3, 4, 5];
      const output = [1, 2, 3, 4, 5];

      assert.deepEqual(sortNumbers(input), output, 'Arrays are one instance');
    });

    it('Example 2', () => {
      const input = [5, 4, 3, 2, 1];
      const output = [1, 2, 3, 4, 5];

      assert.deepEqual(sortNumbers(input), output, 'Arrays are one instance');
    });

    it('Example 3', () => {
      const input = [30, 50, 10, 20, 40];
      const output = [10, 20, 30, 40, 50];

      assert.deepEqual(sortNumbers(input), output, 'Arrays are not equals');
    });

      it('Example 4', () => {
          const input = [10, 20, 30, 40, 50];
          const output = [10, 20, 30, 40, 50];

          assert.deepEqual(sortNumbers(input), output, 'Arrays are one instance');
      });

      it('Example 5', () => {
          const input = [50, 40, 30, 20, 10];
          const output = [10, 20, 30, 40, 50];

          assert.deepEqual(sortNumbers(input), output, 'Arrays are one instance');
      });

    it('Example 6', () => {
      const input = [30, 50, 10, 20, 40];
      const output = [10, 20, 30, 40, 50];

      assert.deepEqual(sortNumbers(input), output, 'Arrays are not equals');
    });
  });
});
