let items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
let ruleKey = "color",
  ruleValue = "silver";
var countMatches = function (items, ruleKey, ruleValue) {
  let output = 0;
  let ruleNo = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type") {
      ruleKey = 0;
    }
    if (ruleKey === "color") {
      ruleNo = 1;
    }
    if (ruleKey === "name") {
      ruleNo = 2;
    }
    if (items[i][ruleNo] === ruleValue) {
      output = output + 1;
    }
  }
  return output;
};

console.log(countMatches(items, ruleKey, ruleValue));
