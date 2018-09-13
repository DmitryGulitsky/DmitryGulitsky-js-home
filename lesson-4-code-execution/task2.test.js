let multiplyNumeric = require('./task2');
let image = require('./task2');
describe('Object x2 function', () => {
  it('Test final object, if only numbers inside'), ()=> {
    expect(multiplyNumeric(image)).toBe({width: 200, height: 800, title: 'Cool image'});
  }
})
