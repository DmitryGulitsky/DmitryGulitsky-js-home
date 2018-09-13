'use strict';
var maxTaskExportFunction = function findMaxTasksCompleted(tasksCompleted) {
  var maxTasksCompleted = 0;
  var maxTasksCompletedName = '';
  for (var key in tasksCompleted) {
    if (tasksCompleted[key] > maxTasksCompleted) {
      maxTasksCompleted = tasksCompleted[key];
      maxTasksCompletedName = key;
    }
  }
  return maxTasksCompletedName;
}
module.exports = maxTaskExportFunction;
