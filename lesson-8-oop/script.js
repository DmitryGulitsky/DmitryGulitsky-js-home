'use strict';
function Question(_text, _answerVariants, _answerTrueVariant) {
  this.text = _text;
  this.answerVariants = _answerVariants;
  this.answerTrueVariant = _answerTrueVariant;
  questionArray.push(questionArrayH);
}

var questionArray = [];
var questionArrayH = [];
questionArrayH = new Question('How many corners at the square? ', [0, 3, 4, 5], 4);
questionArrayH = new Question('How many angles does a triangle have? ', [0, 3, 4, 5], 3);
questionArrayH = new Question('How many angles does a pentagon have? ', [0, 3, 4, 5], 5);

function randomQuestion() {
  var insideRandomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
  var userAnswer = +prompt(insideRandomQuestion.text + insideRandomQuestion.answerVariants + '?');
  if (userAnswer === insideRandomQuestion.answerTrueVariant) {
    return ('You are absolutely right!');
  } else {
    return ('You are not right! Go to school to find the answer!');
  }
}

console.log(randomQuestion());
