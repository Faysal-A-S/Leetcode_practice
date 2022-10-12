let nums = [1, 1, 2, 3];
var decompressRLElist = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; ) {
    for (let j = 0; j < nums[i]; j++) {
      output.push(nums[i + 1]);
    }
    nums.shift();
    nums.shift();
  }
  return output;
};

console.log(decompressRLElist(nums));
