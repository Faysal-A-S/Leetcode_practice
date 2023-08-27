var differenceOfSum = function (nums) {
  let element = 0;
  let digital = 0;
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    element += nums[i];
    while (value) {
      digital += value % 10;
      value = Math.floor(value / 10);
    }
  }
  return Math.abs(element - digital);
};
let nums = [1, 2, 3, 4];

console.log(differenceOfSum(nums));
