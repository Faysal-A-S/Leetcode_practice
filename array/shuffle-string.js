let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

var restoreString = function (s, indices) {
  let output = "";
  s = s.split("");
  let value = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    value.splice(indices[i], 1, s[i]);
  }
  let z = value.toString();

  output = z.replace(/,/g, "");

  return output;
};
console.log(restoreString(s, indices));
