const reverseString = require('../reverse')

test('reversing a string', () => {
    expect(reverseString('STRESSED')).toBe('DESSERTS')
})