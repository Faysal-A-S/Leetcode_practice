const diagonalSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (i === j) {
        sum = sum + mat[i][j];
      }
      if (i !== j && i + j === mat.length - 1) {
        sum = sum + mat[i][j];
      }
    }
  }
  return sum;
};
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalSum(mat));
