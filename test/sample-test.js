describe('test', () => {
  test('includes', () => {
    // setup
    const items = ['1', '2'];

    // exercise
    const actual = items.includes('1');

    // verify
    expect(actual).toBeTruthy();
  });
});
