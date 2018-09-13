let multiplyNumericFunction = require('./task2');
describe('Object x2 function', () => {
  it('Test final object', ()=> {
    expect(multiplyNumericFunction({width: 100, height: 400, title: 'Cool image'}))
      .toEqual({width: 200, height: 800, title: 'Cool image'});
  });
});
