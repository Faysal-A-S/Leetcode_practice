const arrayPairSum = (nums) => {
  let sum = 0;
  let sortedArr = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sortedArr.length; i += 2) {
    sum = sum + sortedArr[i];
  }
  return sortedArr;
};

let nums = [6214, -2290, 2833, -7908];
console.log(arrayPairSum(nums));
