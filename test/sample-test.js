describe('test', () => {
  test('includes', () => {
    // setup
    const items = ['1', '2'];

    // exercise
    const actual = items.includes('1');

    // verify
    expect(actual).toBeTruthy();
  });

  describe('aaa', () => {
    test.each([
      { items: ['1', '2'], target: '1', expected: true },
      { items: ['1', '2'], target: '2', expected: true },
      { items: ['1', '2'], target: '3', expected: false },
    ])('Parameterized test - $target', ({ items, target, expected }) => {
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
