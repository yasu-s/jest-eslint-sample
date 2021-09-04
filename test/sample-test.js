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
    test('includes3', () => {
      // setup
      const items = ['1', '2'];

      // exercise
      const actual = items.includes('2');

      // verify
      expect(actual).toBeTruthy();
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
