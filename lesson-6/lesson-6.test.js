var importVar = require('./lesson-6');
describe('Calculate John and Mark money for the restaurant', ()=> {
  it('John tips', ()=> {
    expect(importVar.exportJohn.tips).toEqual([18.599999999999998, 9.600000000000001, 26.8, 27, 8.4]);
  });
  it('John final values', ()=> {
    expect(importVar.exportJohn.finalValues).toEqual([142.6, 57.6, 294.8, 207, 50.4]);
  });
  it('John average bill', ()=> {
    expect(importVar.exportJohn.averageBill).toEqual(150.48);
  });
  it('Mark tips', ()=> {
    expect(importVar.exportMark.tips).toEqual([15.4, 93.75, 11, 9]);
  });
  it('Mark final values', ()=> {
    expect(importVar.exportMark.finalValues).toEqual([92.4, 468.75, 121, 54]);
  });
  it('Mark average bill', ()=> {
    expect(importVar.exportMark.averageBill).toEqual(184.0375);
  });
  it('Expect Mark average bill is more', ()=> {
    expect(importVar.exportJohn.averageBill > importVar.exportMark.averageBill)
      .toBe(false);
  });
});
