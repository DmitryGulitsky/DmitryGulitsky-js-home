function johnTipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

function markTipCalculator(bill) {
  var percentage;
  if (bill < 100) {
    percentage = 0.2;
  } else if (bill >= 100 && bill < 300) {
    percentage = 0.1;
  } else {
    percentage = 0.25;
  }
  return percentage * bill;
}

function averageBillCalculator(billsArray, finalValuesArray) {
  for (i = 0; i < finalValuesArray.length; i++) {
    billsArray += finalValuesArray[i];
  }
  return billsArray /= finalValuesArray.length;
}

var bills = {
  johnBills: [124, 48, 268, 180, 42],
  markBills: [77, 375, 110, 45]
};
var johnTips = [];
var johnFinalValues = [];
for (var i = 0; i < bills.johnBills.length; i++) {
  johnTips[i] = [johnTipCalculator(bills.johnBills[i])];
  johnFinalValues[i] = [bills.johnBills[i] + johnTips[i]];
}
var markTips = [];
var markFinalValues = [];
for (i = 0; i < bills.markBills.length; i++) {
  markTips[i] = [markTipCalculator(bills.markBills[i])];
  markFinalValues[i] = [bills.markBills[i] + markTips[i]];
}
var johnAverageBill = 0;
var markAverageBill = 0;

console.log(johnTips, johnFinalValues);
console.log(markTips, markFinalValues);

console.log(averageBillCalculator(johnAverageBill, johnFinalValues));
console.log(averageBillCalculator(markAverageBill, markFinalValues));

if (averageBillCalculator(johnAverageBill, johnFinalValues) > averageBillCalculator(markAverageBill, markFinalValues)) {
  console.log('John family paid the highest tips on average');
} else if (averageBillCalculator(johnAverageBill, johnFinalValues) < averageBillCalculator(markAverageBill, markFinalValues)) {
  console.log('Mark family paid the highest tips on average');
} else {
  console.log('Draw');
}
