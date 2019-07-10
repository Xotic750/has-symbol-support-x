import hasSymbolSupport from 'src/has-symbol-support-x';

describe('basic tests', function() {
  it('results should match', function() {
    expect.assertions(1);
    /* eslint-disable-next-line compat/compat */
    const expected = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
    expect(hasSymbolSupport).toBe(expected);
  });
});
