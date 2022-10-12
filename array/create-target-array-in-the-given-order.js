let nums = [1, 2, 3, 4, 0];
let index = [0, 1, 2, 3, 0];
var createTargetArray = function (nums, index) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    output.splice(index[i], 0, nums[i]);
  }
  return output;
};
console.log(createTargetArray(nums, index));
