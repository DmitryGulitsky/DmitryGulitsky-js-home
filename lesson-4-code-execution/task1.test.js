let maxTasksCompletedName = require('./task1');
let maxTasksCompleted = require('./task1');
describe('Find maximum completed tasks', () => {
  it('Find maximum completed tasks name'), () => {
    expect(maxTasksCompletedName).toBe('Anton');
  }
  it('Find maximum completed tasks number'), () => {
    expect(maxTasksCompleted).toBe(99);
  }
})
