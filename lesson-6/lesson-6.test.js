var functionJohnTipCalculator = require('./lesson-6');
var functionMarkTipCalculator = require('./lesson-6');
var functionAverageBillCalculator = require('./lesson-6');
var bills = require('./lesson-6');
var johnTips = require('./lesson-6');
var johnFinalValues = require('./lesson-6');
var markTips = require('./lesson-6');
var markFinalValues = require('./lesson-6');
var johnAverageBill = require('./lesson-6');
var markAverageBill = require('./lesson-6');

describe('Calculate John and Mark money for the restaurant', ()=> {
  it('John and Mark bills arrays', ()=> {
    expect(bills).toBe({johnBills: [124, 48, 268, 180, 42], markBills: [77, 375, 110, 45]});
  })
  it('Calculate John tips', ()=> {
    expect(johnTips).toBe([18.599999999999998, 9.600000000000001, 26.8, 27, 8.4]);
  })
  it('Calculate John final values', ()=> {
    expect(johnFinalValues).toBe([142.6, 57.6, 294.8, 207, 50.4]);
  })
  it('Calculate Mark tips', ()=> {
    expect(markTips).toBe([15.4, 93.75, 11, 9]);
  })
  it('Calculate Mark final values', ()=> {
    expect(markFinalValues).toBe([92.4, 468.75, 121, 54]);
  })
  it('Calculate John average bill', ()=> {
    expect(functionAverageBillCalculator(johnAverageBill, johnFinalValues)).toBe(150.48);
  })
  it('Calculate Mark average bill', ()=> {
    expect(functionAverageBillCalculator(markAverageBill, markFinalValues)).toBe(184.0375);
  })
  it('Find the most average bill', ()=> {
    expect(functionAverageBillCalculator(johnAverageBill, johnFinalValues) > functionAverageBillCalculator(markAverageBill, markFinalValues)).toBe(false);
  });
})
