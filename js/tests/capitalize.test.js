const capitalize = require('../capitalize')

test('capitalizing the first letter of a string', () => {
    expect(capitalize('spiderman')).toBe('Spiderman')
})