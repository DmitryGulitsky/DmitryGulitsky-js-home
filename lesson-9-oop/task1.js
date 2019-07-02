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

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if (ans === this.answerTrueVariant) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again :)');
      sc = callback(true);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
  };

  function score() {
    var sc = 0;
    return function (answerTrueVariant) {
      if (answerTrueVariant) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  var question1 = new Question('How many corners at the square? ', [0, 3, 4, 5], 3);
  var question2 = new Question('How many angles does a triangle have? ', [0, 3, 4, 5], 2);
  var question3 = new Question('How many angles does a pentagon have? ', [0, 3, 4, 5], 4);
  var questionArray = [question1, question2, question3];

  function nextQuestion() {
    var n = Math.floor(Math.random() * questionArray.length);

    questionArray[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questionArray[n].checkAnswer(answer);

    if (answer !== 'exit') {
      questionArray[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }

  nextQuestion();
})();
