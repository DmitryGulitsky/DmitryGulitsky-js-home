'use strict';
function Question(text, answerVariants, answerTrueVariant) {
  this.text = text;
  this.answerVariants = answerVariants;
  this.answerTrueVariant = answerTrueVariant;
}

var questionArray = [];
var question1 = new Question('How many corners at the square? ', [0, 3, 4, 5], 4);
questionArray.push(question1);
var question2 = new Question('How many angles does a triangle have? ', [0, 3, 4, 5], 3);
questionArray.push(question2);
var question3 = new Question('How many angles does a pentagon have? ', [0, 3, 4, 5], 5);
questionArray.push(question3);

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
