let encoded = [6, 2, 7, 3];
let first = 4;
var decode = function (encoded, first) {
  let output = [];
  output.push(first);
  for (let i = 0; i < encoded.length; i++) {
    let nextValue = encoded[i] ^ first;
    first = nextValue;
    output.push(first);
  }
  return output;
};

console.log(decode(encoded, first));
