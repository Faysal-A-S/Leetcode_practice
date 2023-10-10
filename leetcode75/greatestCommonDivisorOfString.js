const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  let larger = str1.length > str2.length ? str1 : str2;
  let smaller = str1.length < str2.length ? str1 : str2;

  return smaller.substring(0, gcd(larger.length, smaller.length));
};
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};
let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";
let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(gcdOfStrings(str1, str2));
