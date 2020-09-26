function NOT_OP(x) {
  return ~x + 2;
}
// console.log("\n NOT_OP: " + NOT_OP(xValue));

function AND_OP(x, y) {
  return x & y;
}
// console.log("\n AND_OP: " + AND_OP(xValue, yValue));

function OR_OP(x, y) {
  return x | y;
}
// console.log("\n OR_OP: " + OR_OP(xValue, yValue));

function XOR_OP(x, y) {
  return x ^ y;
}
// console.log("\n XOR_OP: " + XOR_OP(xValue, yValue));
function SUB_BIT(x, y, b) {
  let bin = XOR_OP(x, y);
  return XOR_OP(bin, b);
}
function BORROW_BIT(x, y, b) {
  let w = NOT_OP(XOR_OP(x, y));
  let z = NOT_OP(x);
  return OR_OP(b * w, z * y);
}
var l1 = [1, 1, 0, 0];
var l2 = [0, 0, 1, 1];
// find the small
var result = [];
var carry = 0;

if (l1.length < l2.length) {
  result.length = l1.length;
} else {
  result.length = l2.length;
}

var start = true;
for (let i = result.length - 1; i > -1; i--) {
  // check if we need to do borrow
  
}

//console.log(result);
