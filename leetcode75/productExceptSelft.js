const productExceptSelf = (nums) => {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let current = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        current *= nums[j];
      }
    }

    output.push(current);
  }
  return output;
};
let nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
