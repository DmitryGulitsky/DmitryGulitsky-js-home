var exportIsPal = require('./task2');

describe('Test palindrom function', ()=> {
  it('Input Anna', ()=> {
    expect(exportIsPal('Anna')).toBe(true);
  });
  it('Input А роза упала на лапу Азора', ()=> {
    expect(exportIsPal('А роза упала на лапу Азора')).toBe(true);
  });
  it('Input Вася', ()=> {
    expect(exportIsPal('Вася')).toBe(false);
  });
  it('Input 12321', ()=> {
    expect(exportIsPal('12321')).toBe(true);
  });
  it('Input 123212', ()=> {
    expect(exportIsPal('123212')).toBe(false);
  });
});
