let accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
var maximumWealth = function (accounts) {
  let finalValue = 0;
  for (let i = 0; i < accounts.length; i++) {
    let innerArrayLength = accounts[i].length;
    let sum = 0;
    for (let j = 0; j < innerArrayLength; j++) {
      sum = accounts[i][j] + sum;
    }
    if (sum > finalValue) {
      finalValue = sum;
    }
  }
  return finalValue;
};

console.log(maximumWealth(accounts));
