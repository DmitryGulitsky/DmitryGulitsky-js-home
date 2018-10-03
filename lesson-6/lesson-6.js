function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
var john = {
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};
var mark = {
  bills: [77, 375, 110, 45],
  tipCalculator: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.tipCalculator();
mark.tipCalculator();
john.averageBill = calcAverage(john.finalValues);
mark.averageBill = calcAverage(mark.finalValues);

if (john.averageBill > mark.averageBill) {
  console.log('John family paid the highest tips on average');
} else if (john.averageBill < mark.averageBill) {
  console.log('Mark family paid the highest tips on average');
} else {
  console.log('Draw');
}

module.exports.exportJohn = john;
module.exports.exportMark = mark;
