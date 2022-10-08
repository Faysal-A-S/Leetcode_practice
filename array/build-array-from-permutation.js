nums = [0, 2, 1, 5, 3, 4];
var buildArray = function (nums) {
  var newArray = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    newArray[i] = nums[nums[i]];
  }
  return newArray;
};
console.log(buildArray(nums));
