var arrayStringsAreEqual = function (word1, word2) {
  let updatedWord1 = "";
  let updatedWord2 = "";
  for (let i = 0; i < word1.length; i++) {
    updatedWord1 += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    updatedWord2 += word2[i];
  }
  if (updatedWord1 === updatedWord2) {
    return true;
  }
  return false;
};
let word1 = ["a", "cb"];
let word2 = ["ab", "c"];

console.log(arrayStringsAreEqual(word1, word2));
const obj = { x: 1, y: 2, z: 3 };
const { x, ...rest } = obj;
console.log(x, rest);
