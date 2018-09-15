findMaxTasksCompletedName = require('./task1');
describe('Function findMaxTasksCompletedName', () => {
  it('Find one maximum completed tasks Name', () => {
    expect(findMaxTasksCompletedName({'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99})).toBe('Anton');
  });
  it('Find draw with equal completed tasks', () => {
    expect(findMaxTasksCompletedName({'Anna': 99, 'Serg': 99, 'Elena': 1, 'Anton': 99})).toBe('Ничья');
  });
  it('Find nobody with completed tasks', () => {
    var object = null;
    expect(findMaxTasksCompletedName(object)).toBe('Никто');
  });
});
