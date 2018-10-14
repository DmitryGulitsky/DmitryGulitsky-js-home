'use strict';
(function () {
  function Question(text, answerVariants, answerTrueVariant) {
    this.text = text;
    this.answerVariants = answerVariants;
    this.answerTrueVariant = answerTrueVariant;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.text);

    for (var i = 0; i < this.answerVariants.length; i++) {
      console.log(i + ': ' + this.answerVariants[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');

    } else {
      console.log('Wrong answer. Try again :)');
    }
  };

  var question1 = new Question('How many corners at the square? ', [0, 3, 4, 5], 3);
  var question2 = new Question('How many angles does a triangle have? ', [0, 3, 4, 5], 2);
  var question3 = new Question('How many angles does a pentagon have? ', [0, 3, 4, 5], 4);
  var questionArray = [question1, question2, question3];

  var n = Math.floor(Math.random() * questionArray.length);

  questionArray[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questionArray[n].checkAnswer(answer);
})();
