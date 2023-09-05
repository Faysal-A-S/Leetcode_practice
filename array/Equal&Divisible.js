const countPairs = (nums, k) => {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j] && (i * j) % k === 0) {
        pairs++;
      }
    }
  }
  return pairs;
};
let nums = [3, 1, 2, 2, 2, 1, 3];
let k = 2;
console.log(countPairs(nums, k));
