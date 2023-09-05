const separateDigits = (nums) => {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i].toString();
    let spElement = element.split("");
    for (let j = 0; j < spElement.length; j++) {
      newArr.push(parseInt(spElement[j]));
    }
  }
  return newArr;
};
let nums = [7, 1, 3, 9];

console.log(separateDigits(nums));
