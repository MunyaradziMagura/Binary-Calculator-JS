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


function ADD_BIT(x, y, c) {
  this.c = CARRY_BIT(x, y, c);
  this.z = XOR_OP(x, y);
  return XOR_OP(c, z);
}

function CARRY_BIT(x, y, c) {
  carry = OR_OP(AND_OP(x, y), AND_OP(c, XOR_OP(x, y)));
  return carry;
}

var start = true;
for (let i = result.length - 1; i > -1; i--) {
  if (CARRY_BIT(l1[i], l2[i], carry) === 0) {
    result[i] = ADD_BIT(l1[i], l2[i], CARRY_BIT(l1[i], l2[i], carry));
    // 1 + 1 with carry bit
  }
  // first carry, 1 + 1 = 0 with carry
  if (start == true && NOT_OP(AND_OP(l1[i], l2[i])) === 0) {
    result[i] = NOT_OP(AND_OP(l1[i], l2[i]));
    carry = CARRY_BIT(l1[i], l2[i], carry);
    start = false;
    // carry + 0 + 0 = 1
  } else if (start == false && OR_OP(l1[i], l2[i]) === 0) {
    result[i] = NOT_OP(OR_OP(l1[i], l2[i]));
    carry = OR_OP(l1[i], l2[i]);
    // change start back to true in case there is another 1 + 1 pair
    start = true;
    // carry + 0 + 1 = 0 with carry or carry + 1 + 0 = 0 with carry
  } else if (start === false && XOR_OP(l1[i], l2[i]) === 1) {
    result[i] = NOT_OP(XOR_OP(l1[i], l2[i]));
  }
}

console.log(result);
