'use strict';
function Question(HQuestion, _text, _answerVariants, _answerTrueVariant) {
  HQuestion.text = _text;
  HQuestion.answerVariants = _answerVariants;
  HQuestion.answerTrueVariant = _answerTrueVariant;
  HQuestion.show = function () {
    var userAnswer = +prompt(this.text);
    if (userAnswer === _answerTrueVariant) {
      console.log('You are absolutely right!');
    } else {
      console.log('You are not right! Go to school to find the answer!');
    }
  };
}

var Question1 = {};
Question(Question1, 'How many corners at the square?', [0, 1, 2, 3, 4], 4);

var Question2 = {};
Question(Question2, 'How many angles does a triangle have?', [0, 1, 2, 3, 4], 3);

var Question3 = {};
Question(Question3, 'How many corners are there in the circle?', [0, 1, 2, 3, 4], 0);

Question1.show();
Question2.show();
Question3.show();
