const caesarCipher = require("../ceasarCipher");

test('Wraps from z to a', () => {
    expect(caesarCipher('Z', 1)).toEqual('A');
});

test('Works with punctuation', () => {
    expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});