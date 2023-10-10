const reverseWords = (s) => {
  let output = "";

  let test = s.split(" ");
  let x = test.filter((x) => x !== "");
  for (let i = x.length - 1; i >= 0; i--) {
    output = output + " " + x[i];
  }
  output = output.trim();
  return output;
};
let s =
  "       the              sky is              blue                      ";
console.log(reverseWords(s));
