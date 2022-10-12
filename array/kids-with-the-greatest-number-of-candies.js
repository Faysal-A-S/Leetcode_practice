let candies = [4, 2, 1, 1, 2];
let extraCandies = 1;
var kidsWithCandies = function (candies, extraCandies) {
  let greatNumber = 0;
  let output = [];
  candies.forEach((element) => {
    if (element > greatNumber) {
      greatNumber = element;
    }
  });
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatNumber) {
      output.push(true);
    } else {
      output.push(false);
    }
  }

  return output;
};
console.log(kidsWithCandies(candies, extraCandies));
