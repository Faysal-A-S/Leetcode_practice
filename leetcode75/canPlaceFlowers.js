const canPlaceFlowers = (flowerbed, n) => {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 || i === flowerbed.length - 1) {
      if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        n--;
      }
      if (
        flowerbed[flowerbed.length - 1] === 0 &&
        flowerbed[flowerbed.length - 2] === 0
      ) {
        flowerbed[flowerbed.length - 1] = 1;
        n--;
      }
    }
    if (i !== 0 || i !== flowerbed.length - 1) {
      if (flowerbed[i] === 0) {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          n--;
        }
      }
    }
  }
  if (n <= 0) {
    return true;
  } else {
    return false;
  }
};
let flowerbed = [1, 0, 0, 0, 0, 1];

let n = 2;
console.log(canPlaceFlowers(flowerbed, n));
