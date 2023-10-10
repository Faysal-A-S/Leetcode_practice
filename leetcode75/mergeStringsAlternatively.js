const mergeAlternatively = (word1, word2) => {
  let output = "";
  let sent1 = "";
  let sent2 = "";
  let length = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < length; i++) {
    sent1 = word1[i] === undefined ? "" : word1[i];

    sent2 = word2[i] === undefined ? "" : word2[i];

    output = output + sent1 + sent2;
  }
  return output;
};
let word1 = "ab";
let word2 = "pqrs";
console.log(mergeAlternatively(word1, word2));
