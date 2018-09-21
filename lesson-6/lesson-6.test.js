var exportJohn = require('./lesson-6');
var exportJohnBillFunction = exportJohn.tipCalculator();
var exportMark = require('./lesson-6');
var exportMarkBillFunction = exportMark.tipCalculator();
var exportAverageBillCalculator = require('./lesson-6');

describe('Calculate John and Mark money for the restaurant', ()=> {
  it('Calculate John tips', ()=> {
    expect(exportJohn.tips).toBe([18.599999999999998, 9.600000000000001, 26.8, 27, 8.4]);
  })
  it('Calculate John final values', ()=> {
    expect(exportJohn.finalValues).toBe([142.6, 57.6, 294.8, 207, 50.4]);
  })
  it('Calculate Mark tips', ()=> {
    expect(exportMark.tips).toBe([15.4, 93.75, 11, 9]);
  })
  it('Calculate Mark final values', ()=> {
    expect(exportMark.finalValues).toBe([92.4, 468.75, 121, 54]);
  })
  it('Calculate John average bill', ()=> {
    expect(AverageBillCalculator(john.averageBill, john.finalValues)).toBe(150.48);
  })
  it('Calculate Mark average bill', ()=> {
    expect(AverageBillCalculator(mark.averageBill, mark.finalValues)).toBe(184.0375);
  })
  it('Find the most average bill', ()=> {
    expect(AverageBillCalculator(john.averageBill, john.finalValues) > AverageBillCalculator(mark.averageBill, mark.finalValues)).toBe(false);
  });
})
