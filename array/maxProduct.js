const maxProduct = (nums) => {
  let x = null;
  let xIndex = 0;
  let y = null;
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > x) {
      x = nums[i];
      xIndex = i;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (j === xIndex) {
      continue;
    }
    if (nums[j] > y) {
      y = nums[j];
    }
  }

  output = (x - 1) * (y - 1);
  return output;
};
let nums = [10, 2, 5, 2];
console.log(maxProduct(nums));
