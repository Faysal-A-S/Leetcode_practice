var truncateSentence = function (s, k) {
  let arr = s.split(" ");

  let sent = "";
  for (let i = 0; i < k; i++) {
    sent = sent + arr[i] + " ";
  }
  sent = sent.trim();
  return sent;
};
let s = "Hello how are you Contestant";
let k = 4;
truncateSentence(s, k);
console.log(truncateSentence(s, k));
