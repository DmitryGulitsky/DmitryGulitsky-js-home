describe('Typeof methods', () => {
  it('Typeof string Positive', () => {
    const str = 'abc';
    expect(typeof(str)).toBe('string');
  });
  it('Typeof string Negative', () => {
    const str = 'abc';
    expect(typeof(str)).toBe('number');
  });
  it('Typeof number Positive', () => {
    const str = 10;
    expect(typeof(str)).toBe('number');
  });
  it('Typeof number Negative', () => {
    const str = 10;
    expect(typeof(str)).toBe('boolean');
  });
  it('Typeof boolean Positive', () => {
    const str = true;
    expect(typeof(str)).toBe('boolean');
  });
  it('Typeof boolean Negative', () => {
    const str = 'abc';
    expect(typeof(str)).toBe('number');
  });
  it('Typeof undefined Positive', () => {
    const str = undefined;
    expect(typeof(str)).toBe('undefined');
  });
  it('Typeof undefined Negative', () => {
    const str = 'abc';
    expect(typeof(str)).toBe('number');
  });
  it('Typeof object Positive', () => {
    const str = {};
    expect(typeof(str)).toBe('object');
  });
  it('Typeof object Negative', () => {
    const str = 'abc';
    expect(typeof(str)).toBe('object');
  });
});
