const {assert} = require('chai');
const {createTagsBr} = require('./method-map-strings');

describe('createTagsBr', () => {
    it('Should be a function', () => {
        assert.equal(typeof createTagsBr, 'function', 'Is not a function');
    });

    it('Should return new array', () => {
        const input = ['hello world', 'foo bar', 'bar baz'];
        const result = createTagsBr(input);

        assert.isOk(result instanceof Array, 'Result is not array');
    });

    it('Should not change original array', () => {
        const input = ['hello world', 'foo bar', 'bar baz'];
        const clonedInput = input.slice();

        createTagsBr(input);

        assert.deepEqual(input, clonedInput, 'Input after sorting is changed');
    });

    describe('Should return correct result', () => {
        it('Example 1', () => {
            const input = ['hello world', 'foo bar', 'bar baz'];
            const output = [
                '<b>hello world</b>',
                '<b>foo bar</b>',
                '<b>bar baz</b>',
            ];

            assert.deepEqual(createTagsBr(input), output, 'Arrays are one instance');
        });

        it('Example 2', () => {
            const input = ['bar baz', 'hello world', 'foo bar'];
            const output = [
                '<b>bar baz</b>',
                '<b>hello world</b>',
                '<b>foo bar</b>',
            ];

            assert.deepEqual(createTagsBr(input), output, 'Arrays are one instance');
        });
    });
});
