let arr = [10, 11, 12];

const sumOddLengthSubarrays = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let x = arr.length;
  while (x > 2) {
    if (x % 2 === 0) {
      x = x - 1;
    }
    sum += adder(arr, x);
    x = x - 2;
  }
  return sum;
};
const adder = (arr, l) => {
  let rest = arr.length - l;
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > rest) {
      break;
    }
    for (let j = i; j < l + i; j++) {
      value += arr[j];
    }
  }
  return value;
};

console.log(sumOddLengthSubarrays(arr));
