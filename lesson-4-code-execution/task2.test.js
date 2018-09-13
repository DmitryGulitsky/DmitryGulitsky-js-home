let image = require('./task2');
describe('Object x2 function', () => {
  it('Test final object', ()=> {
    expect(image).toEqual({width: 200, height: 800, title: 'Cool image'});
  });
  it('Test width x 2', ()=> {
    expect(image.width).toEqual(200);
  });
  it('Test height x 2', ()=> {
    expect(image.height).toEqual(800);
  });
  it('Test title without Number', ()=> {
    expect(image.title).toEqual('Cool image');
  });
})
