let maxTaskExportFunction = require('./task1');
describe('Find maximum completed tasks', () => {
  it('Find maximum completed tasks', () => {
    expect(maxTaskExportFunction({'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99})).toBe('Anton');
  });
});
