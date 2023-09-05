const countGoodTriplets = (arr, a, b, c) => {
  let triplet = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c &&
          i < j &&
          j < k
        ) {
          triplet++;
        }
      }
    }
  }
  return triplet;
};
let arr = [3, 0, 1, 1, 9, 7];
let a = 7;
let b = 2;
let c = 3;
console.log(countGoodTriplets(arr, a, b, c));
