'use strict';
function Question(_text, _answerVariants, _answerTrueVariant) {
  this.text = _text;
  this.answerVariants = _answerVariants;
  this.answerTrueVariant = _answerTrueVariant;
  this.show = function () {
    var userAnswer = +prompt(this.text + this.answerVariants + '?');
    if (userAnswer === this.answerTrueVariant) {
      console.log('You are absolutely right!');
    } else {
      console.log('You are not right! Go to school to find the answer!');
    }
  };
}

var questionArray = [];
questionArray.question1 = new Question('How many corners at the square? ', [0, 3, 4, 5], 4);
questionArray.question2 = new Question('How many angles does a triangle have? ', [0, 3, 4, 5], 3);
questionArray.question3 = new Question('How many angles does a pentagon have? ', [0, 3, 4, 5], 5);
questionArray.question1.show();
questionArray.question2.show();
questionArray.question3.show();
console.log(questionArray);

function randomQuestion() {
  var rand = Math.floor(Math.random() * questionArray.length);
  console.log('rand = ' + rand);
  console.log(questionArray[rand]);
  var insideRandomQuestion = questionArray[rand];
  console.log(insideRandomQuestion);
  var userAnswer = +prompt(insideRandomQuestion.text + insideRandomQuestion.answerVariants + '?');
  if (userAnswer === insideRandomQuestion.answerTrueVariant) {
    console.log('You are absolutely right!');
  } else {
    console.log('You are not right! Go to school to find the answer!');
  }
  return randomQuestion;
};

console.log(randomQuestion());