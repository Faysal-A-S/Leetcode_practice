let operations = ["X++", "++X", "--X", "X--"];
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (value in operations) {
    if (operations[value] === "X--" || operations[value] === "--X") {
      x = x - 1;
    } else if (operations[value] === "X++" || operations[value] === "++X") {
      x = x + 1;
    }
  }
  return x;
};
console.log(finalValueAfterOperations(operations));
