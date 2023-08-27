const arithmeticTriplets = (nums, diff) => {
  let diffCount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          diffCount++;
        }
      }
    }
  }
  return diffCount;
};
let nums = [0, 1, 4, 6, 7, 10];
let diff = 3;
console.log(arithmeticTriplets(nums, diff));
