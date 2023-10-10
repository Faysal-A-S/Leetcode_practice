const reverseVowels = (s) => {
  let vowels = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u" ||
      s[i] == "A" ||
      s[i] == "E" ||
      s[i] == "I" ||
      s[i] == "O" ||
      s[i] == "U"
    ) {
      vowels.push(s[i]);
      s = s.substring(0, i) + "�" + s.substring(i + 1);
    }
  }
  if (vowels.length === 0) {
    vowels.push(" ");
  }
  for (let j = 0; j < s.length; j++) {
    if (s[j] === "�") {
      s = s.substring(0, j) + vowels[vowels.length - 1] + s.substring(j + 1);
      vowels.pop();
    }
  }
  return s;
};
let s = "aA";
console.log(reverseVowels(s));
