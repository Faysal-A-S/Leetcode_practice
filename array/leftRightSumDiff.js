var leftRightDifference = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let value = 0;
    let left = 0;
    let right = 0;

    for (let j = 0; j < nums.length; j++) {
      if (i > 0 && j < i) {
        left = left + nums[j];
      }
      if (i < nums.length - 1 && j > i) {
        right = right + nums[j];
      }
    }
    if (i === 0) {
      left = 0;
    }
    if (i === nums.length - 1) {
      right = 0;
    }
    value = Math.abs(left - right);
    result.push(value);
  }
  return result;
};
let nums = [1];

console.log(leftRightDifference(nums));
