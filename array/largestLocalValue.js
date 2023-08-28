const largestLocal = (grid) => {
  let x = grid.length - 2;
  let output = [];
  for (let i = 0; i < x; i++) {
    let cArr = [];
    for (let j = 0; j < x; j++) {
      cArr.push(maxLocal(grid, j, i));
    }
    output.push(cArr);
  }
  return output;
};
const maxLocal = (grid, x, y) => {
  let v1 = null;
  for (let i = x; i < 3 + x; i++) {
    for (let j = y; j < 3 + y; j++) {
      if (grid[j][i] > v1) {
        v1 = grid[j][i];
      }
    }
  }
  return v1;
};

let grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(largestLocal(grid));
