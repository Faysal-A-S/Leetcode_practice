const isAcronym = (words, s) => {
  let condition = false;
  if (words.length !== s.length) {
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === s[i]) {
      condition = true;
    } else {
      return false;
    }
  }
  return condition;
};

let words = ["an", "apple"];
let s = "a";
console.log(isAcronym(words, s));
