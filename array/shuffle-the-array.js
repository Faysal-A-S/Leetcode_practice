let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
var shuffle = function (nums, n) {
  let x = [];
  let y = [];
  let newArray = [];
  for (let i = 0; i < 2 * n; i++) {
    if (i < n) {
      x.push(nums[i]);
    }
    if (i >= n) {
      y.push(nums[i]);
    }
  }
  for (let j = 0; j < n; j++) {
    newArray.push(x[j]);
    newArray.push(y[j]);
  }
  return newArray;
};
console.log(shuffle(nums, n));
