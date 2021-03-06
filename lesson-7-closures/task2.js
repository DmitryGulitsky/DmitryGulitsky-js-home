'use strict';
function interviewQuestion(profession) {
  function interviewQuestionWithProfession(name) {
    if (profession === 'designer') {
      var question = name + ' can you please explain what UX design is?';
    } else if (profession === 'teacher') {
      question = 'What subject do you teach ' + name + '?';
    } else if  (profession === 'other') {
      question = 'Hello ' + name + ', what do you do?';
    }
    return question;
  }
  return interviewQuestionWithProfession;
}

module.exports = interviewQuestion;
