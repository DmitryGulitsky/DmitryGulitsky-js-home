let multiplyNumericFunction = require('./task2');
describe('Object x2 function', () => {
  it('Test final object with values', ()=> {
    expect(multiplyNumericFunction({width: 100, height: 400, title: 'Cool image'}))
      .toEqual({width: 200, height: 800, title: 'Cool image'});
  });
  it('Test final object with no values', ()=> {
    expect(multiplyNumericFunction({}))
      .toEqual({});
  });
  it('Test final object with no number values', ()=> {
    expect(multiplyNumericFunction({width: null, height: null, title: 'Cool image'}))
      .toEqual({width: null, height: null, title: 'Cool image'});
  });
});
