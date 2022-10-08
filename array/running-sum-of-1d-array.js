let nums = [1, 2, 3, 4];
var runningSum = function (nums) {
  let newArray = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    newArray[i] = nums[i] + sum;
    sum = nums[i] + sum;
  }
  return newArray;
};

console.log(runningSum(nums));
