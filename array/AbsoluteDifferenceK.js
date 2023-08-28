const countKDifference = (nums, k) => {
  let difference = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (Math.abs(nums[i] - nums[j]) === k && i < j) {
          difference++;
        }
      }
    }
  }
  return difference;
};
let nums = [3, 2, 1, 5, 4];
let k = 2;
console.log(countKDifference(nums, k));
