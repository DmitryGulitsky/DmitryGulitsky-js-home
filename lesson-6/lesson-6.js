function averageBillCalculator(billsArray, finalValuesArray) {
  for (i = 0; i < finalValuesArray.length; i++) {
    billsArray += finalValuesArray[i];
  }
  return billsArray /= finalValuesArray.length;
}
var john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  tipCalculator: function (bill) {
    var percentage;
    if (bill < 50) {
      percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
      percentage = 0.15;
    } else {
      percentage = 0.1;
    }
    return percentage * bill;
  },
  finalValues: [],
  averageBill: 0
}
var mark = {
  bills: [77, 375, 110, 45],
  tips: [],
  tipCalculator: function (bill) {
    var percentage;
    if (bill < 100) {
      percentage = 0.2;
    } else if (bill >= 100 && bill < 300) {
      percentage = 0.1;
    } else {
      percentage = 0.25;
    }
    return percentage * bill;
  },
  finalValues: [],
  averageBill: 0
}

for (var i = 0; i < john.bills.length; i++) {
  john.tips[i] = john.tipCalculator(john.bills[i]);
  john.finalValues[i] = john.bills[i] + john.tips[i];
}
for (i = 0; i < mark.bills.length; i++) {
  mark.tips[i] = mark.tipCalculator(mark.bills[i]);
  mark.finalValues[i] = mark.bills[i] + mark.tips[i];
}

console.log(john.tips, john.finalValues);
console.log(mark.tips, mark.finalValues);
console.log(averageBillCalculator(john.averageBill, john.finalValues));
console.log(averageBillCalculator(mark.averageBill, mark.finalValues));

if (averageBillCalculator(john.averageBill, john.finalValues) > averageBillCalculator(mark.averageBill, mark.finalValues)) {
  console.log('John family paid the highest tips on average');
} else if (averageBillCalculator(john.averageBill, john.finalValues) < averageBillCalculator(mark.averageBill, mark.finalValues)) {
  console.log('Mark family paid the highest tips on average');
} else {
  console.log('Draw');
}

module.exports.exportJohn = john;
module.exports.exportMark = mark;
module.exports.exportAverageBillCalculator = averageBillCalculator;
