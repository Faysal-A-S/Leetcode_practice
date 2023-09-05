const deleteGreatestValue = (grid) => {
  let length = grid[0].length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + greatestValue(grid);
    grid = newGrid(grid);
  }
  return sum;
};
let grid = [[10]];
const greatestValue = (grid) => {
  let greatest = null;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > greatest) {
        greatest = grid[i][j];
      }
    }
  }
  return greatest;
};
const newGrid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    let bigValue = null;
    let bigValueIndex = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > bigValue) {
        bigValue = grid[i][j];
        bigValueIndex = j;
      }
    }
    grid[i].splice(bigValueIndex, 1);
  }
  return grid;
};
console.log(deleteGreatestValue(grid));
