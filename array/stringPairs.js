const maximumNumberOfStringPairs = (words) => {
  let pair = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i == j) {
        continue;
      }
      if (words[i] === reverseString(words[j]) && i < j) {
        pair++;
      }
    }
  }
  return pair;
};
const reverseString = (string) => {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};
let words = ["cd", "ac", "dc", "ca", "zz"];

console.log(maximumNumberOfStringPairs(words));
