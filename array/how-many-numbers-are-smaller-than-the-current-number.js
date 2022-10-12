let nums = [6, 5, 4, 8];
var smallerNumbersThanCurrent = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }
      if (nums[j] < nums[i]) {
        sum = sum + 1;
      }
    }
    output.push(sum);
  }
  return output;
};
console.log(smallerNumbersThanCurrent(nums));
