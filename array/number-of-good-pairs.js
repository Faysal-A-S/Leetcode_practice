let nums = [1, 2, 3];
var numIdenticalPairs = function (nums) {
  let goodPairs = 0;
  for (let x = 0; x < nums.length; x++) {
    for (let i = x; i < nums.length; i++) {
      if (nums[x] === nums[i + 1]) {
        goodPairs = goodPairs + 1;
      }
    }
  }
  return goodPairs;
};
console.log(numIdenticalPairs(nums));
