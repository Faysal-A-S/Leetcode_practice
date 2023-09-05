const maximizeSum = (nums, k) => {
  let sum = 0;
  let current = nums[0];
  let currentIndex = 0;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > current) {
        current = nums[j];
        currentIndex = j;
      }
    }
    nums[currentIndex] = current + 1;
    sum = sum + current;
  }
  return sum;
};
let nums = [5, 5, 5];
let k = 2;
console.log(maximizeSum(nums, k));
