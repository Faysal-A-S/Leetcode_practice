let hours = [5, 1, 4, 2, 2];
let target = 6;
const targetChecker = (hours, target) => {
  let mTarget = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      mTarget++;
    }
  }
  return mTarget;
};
console.log(targetChecker(hours, target));
