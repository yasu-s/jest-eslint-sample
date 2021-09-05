describe('test', () => {
  const testItems = ['1', '2'];

  test('includes', () => {
    // setup
    const items = ['1', '2'];

    // exercise
    const actual = items.includes('1');

    // verify
    expect(actual).toBeTruthy();
  });

  describe('Parameterized test', () => {
    test.each([
      { items: testItems,  target: '1', expected: true },
      { items: ['1', '2'], target: '2', expected: true },
      { items: ['1', '2'], target: '3', expected: false },
    ])('object - $target', ({ items, target, expected }) => {
      // exercise
      const actual = items.includes(target);

      // verify
      expect(actual).toBe(expected);
    });

    test.each`
      items         | target   | expected
      ${testItems}  | ${'1'}   | ${true}
      ${testItems}  | ${'2'}   | ${true}
      ${['1', '2']} | ${'3'}   | ${false}
    `('table - $target', ({ items, target, expected })=> {
      // exercise
      const actual = items.includes(target);

      // verify
      expect(actual).toBe(expected);
    });
  });

  test('includes2', () => {
    // setup
    const items = ['1', '2'];

    // exercise
    const actual = items.includes('2');

    // verify
    expect(actual).toBeTruthy();
  });
});
