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
                '<br>hello world</br>',
                '<br>foo bar</br>',
                '<br>bar baz</br>',
            ];

            assert.deepEqual(createTagsBr(input), output, 'Arrays are one instance');
        });

        it('Example 2', () => {
            const input = ['bar baz', 'hello world', 'foo bar'];
            const output = [
                '<br>bar baz</br>',
                '<br>hello world</br>',
                '<br>foo bar</br>',
            ];

            assert.deepEqual(createTagsBr(input), output, 'Arrays are one instance');
        });

        it('Example 3', () => {
            const input = [
                'Тег br устанавливает перевод строки в том месте, где этот тег находится.',
                'В отличие от тега абзаца p, использование тега br не добавляет пустой отступ перед строкой.',
                'Если текст, в котором используется перевод строки, обтекает плавающий элемент, то с помощью атрибута clear тега br можно сделать так, чтобы следующая строка начиналась ниже элемента.',
            ];
            const output = [
                '<br>Тег br устанавливает перевод строки в том месте, где этот тег находится.</br>',
                '<br>В отличие от тега абзаца p, использование тега br не добавляет пустой отступ перед строкой.</br>',
                '<br>Если текст, в котором используется перевод строки, обтекает плавающий элемент, то с помощью атрибута clear тега br можно сделать так, чтобы следующая строка начиналась ниже элемента.</br>',
            ];

            assert.deepEqual(createTagsBr(input), output, 'Arrays are not equals');
        });
    });
});
