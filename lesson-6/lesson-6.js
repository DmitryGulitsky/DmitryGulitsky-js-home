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
var bills = {
  johnBills: [124, 48, 268, 180, 42],
  markBills: [77, 375, 110, 45]
};
var johnTips = [johnTipCalculator(bills.johnBills[0]),
  johnTipCalculator(bills.johnBills[1]),
  johnTipCalculator(bills.johnBills[2]),
  johnTipCalculator(bills.johnBills[3]),
  johnTipCalculator(bills.johnBills[4])];

var johnFinalValues = [bills.johnBills[0] + johnTips[0],
  bills.johnBills[1] + johnTips[1],
  bills.johnBills[2] + johnTips[2],
  bills.johnBills[2] + johnTips[3],
  bills.johnBills[2] + johnTips[4]];

var markTips = [markTipCalculator(bills.markBills[0]),
  johnTipCalculator(bills.markBills[1]),
  johnTipCalculator(bills.markBills[2]),
  johnTipCalculator(bills.markBills[3])];

var markFinalValues = [bills.markBills[0] + markTips[0],
  bills.markBills[1] + markTips[1],
  bills.markBills[2] + markTips[2],
  bills.markBills[2] + markTips[3],];

console.log(johnTips, johnFinalValues);
console.log(markTips, markFinalValues);