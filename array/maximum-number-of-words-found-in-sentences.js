let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
var mostWordsFound = function (sentences) {
  let highestWord = 0;
  for (let x of sentences) {
    let y = x.split(" ");

    if (y.length > highestWord) {
      highestWord = y.length;
    }
  }
  return highestWord;
};
console.log(mostWordsFound(sentences));
