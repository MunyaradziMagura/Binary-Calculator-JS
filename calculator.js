// Run [ npm install jquery ] in terminal to add jquery
// Store user details for easy access and edit
var details = {
  firstName: "Munyaradzi",
  lastName: "Magura",
  id: 110256579,
  email: "Magmy020",
  pledge:
    "This is my own work as defined by the University's Academic Misconduct Policy.",
  // call user details
  fullDetails: function () {
    return (
      "\n Author: " +
      this.firstName +
      " " +
      this.lastName +
      "\n Student ID: " +
      this.id +
      "\n Email: " +
      this.email +
      "\n " +
      this.pledge +
      "\n"
    );
  },
};
console.log(details.fullDetails());
// print tables
console.log(
  `ADDITION
c x y Z C
- - - - -
0 0 0 ${ADD_BIT(0, 0, 0)} ${CARRY_BIT(0, 0, 0)}
0 0 1 ${ADD_BIT(0, 0, 1)} ${CARRY_BIT(0, 0, 1)}
0 1 0 ${ADD_BIT(0, 1, 0)} ${CARRY_BIT(0, 1, 0)}
0 1 1 ${ADD_BIT(0, 1, 1)} ${CARRY_BIT(0, 1, 1)}
1 0 0 ${ADD_BIT(1, 0, 0)} ${CARRY_BIT(1, 0, 0)}
1 0 1 ${ADD_BIT(1, 0, 1)} ${CARRY_BIT(1, 0, 1)}
1 1 0 ${ADD_BIT(1, 1, 0)} ${CARRY_BIT(1, 1, 0)}
1 1 1 ${ADD_BIT(1, 1, 1)} ${CARRY_BIT(1, 1, 1)}

SUBTRACTION
b x y Z B
- - - - -
0 0 0 ${SUB_BIT(0, 0, 0)} ${BORROW_BIT(0, 0, 0)}
0 0 1 ${SUB_BIT(0, 0, 1)} ${BORROW_BIT(0, 0, 1)}
0 1 0 ${SUB_BIT(0, 1, 0)} ${BORROW_BIT(0, 1, 0)}
0 1 1 ${SUB_BIT(0, 1, 1)} ${BORROW_BIT(0, 1, 1)}
1 0 0 ${SUB_BIT(1, 0, 0)} ${BORROW_BIT(1, 0, 0)}
1 0 1 ${SUB_BIT(1, 0, 1)} ${BORROW_BIT(1, 0, 1)}
1 1 0 ${SUB_BIT(1, 1, 0)} ${BORROW_BIT(1, 1, 0)}
1 1 1 ${SUB_BIT(1, 1, 1)} ${BORROW_BIT(1, 1, 1)}

LESS_THAN
l x y L 
- - - - 
0 0 0 ?
0 0 1 ?
0 1 0 ?
0 1 1 ?
1 0 0 ?
1 0 1 ?
1 1 0 ?
1 1 1 ?`
);
// inilise readline module
const readLine = require("readline");
const { ok } = require("assert");

// create an instance of the readline module using create interface method
const userInput = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// inilise varibles which will need to be used
var validOp = ["+", "-", "q"],
  operator,
  finalResult,
  x,
  y;

// ask the user to input an operation
userInput.question("Choose operation [+, -, q]: ", (answer) => {
  // trim removes whitespace at the begining & end of input
  // check that the users input is a valid operation
  if (validOp.includes(answer.trim().toLowerCase())) {
    // iniliser operator varible
    operator = answer.trim().toLowerCase();
    // check if the app closes or not
    if (answer.trim().toLowerCase() === "q") {
      userInput.close();
    } else {
      // take in the users second input which is the x value
      userInput.question("X: ", (xValue) => {
        // check if the users x value is correct
        if (validateInput(xValue)) {
          x = xValue.replace(/\s+/g, "");
          // check user input Y is valid
          userInput.question("Y: ", (yValue) => {
            // check if y value is valid
            if (validateInput(yValue)) {
              y = yValue.replace(/\s+/g, "");
              // if the users input correct calculate result & close
              finalResult = calculate(x, y, operator);
              userInput.close();
            } else {
              // re-prompt the user
              userInput.setPrompt("Not a binary number!\nY: ");
              // call the prompt
              userInput.prompt();

              // add listener. listen for the users input and help them
              userInput.on("line", (yValue) => {
                // check if the users input is correct
                if (validateInput(yValue)) {
                  y = yValue.replace(/\s+/g, "");
                  // if the users input correct calculate result & close
                  finalResult = calculate(x, y, operator);
                  userInput.close();
                } else {
                  // reset the prompt
                  userInput.setPrompt(`Not a binary number! \nY: `);
                  userInput.prompt();
                }
              });
            }
          });
        } else {
          // re-prompt the user
          userInput.setPrompt("Not a binary number!\nX: ");
          // call the prompt
          userInput.prompt();

          // add listener. listen for the users input and help them
          userInput.on("line", (xValue) => {
            // check if the users input is correct
            if (validateInput(xValue)) {
              x = xValue.replace(/\s+/g, "");
              userInput.question("Y: ", (yValue) => {
                // check if y value is valid
                if (validateInput(yValue)) {
                  y = yValue.replace(/\s+/g, "");
                  // if the users input correct calculate result & close
                  finalResult = calculate(x, y, operator);
                  userInput.close();
                } else {
                  // re-prompt the user
                  userInput.setPrompt("Not a binary number!\nY: ");
                  // call the prompt
                  userInput.prompt();

                  // add listener. listen for the users input and help them
                  userInput.on("line", (yValue) => {
                    // check if the users input is correct
                    if (validateInput(yValue)) {
                      y = yValue.replace(/\s+/g, "");
                      // if the users input correct calculate result & close
                      finalResult = calculate(x, y, operator);
                      userInput.close();
                    } else {
                      // reset the prompt
                      userInput.setPrompt(`Not a binary number! \nY: `);
                      userInput.prompt();
                    }
                  });
                }
              });
              // if the users input is not correct
            } else {
              // reset the prompt
              userInput.setPrompt(`Not a binary number! \nX: `);
              userInput.prompt();
            }
          });
        }
      });
    }

    // if the user inputs an invalid operation
  } else {
    // re-prompt the user
    userInput.setPrompt(
      "invalid operation please try again\nChoose operation [+, -, q]: "
    );
    // call the prompt
    userInput.prompt();

    // add listener. losten for the users input and help them
    userInput.on("line", (answer) => {
      // check if the users input is correct
      if (validOp.includes(answer.trim().toLowerCase())) {
        if (answer.trim().toLowerCase() === "q") {
          userInput.close();
        } else {
          // iniliser operator varible
          operator = answer.trim().toLowerCase();
          // check if the app closes or not
          if (answer.trim().toLowerCase() === "q") {
            userInput.close();
          } else {
            // take in the users second input which is the x value
            userInput.question("X: ", (xValue) => {
              // check if the users x value is correct
              if (validateInput(xValue)) {
                x = xValue.replace(/\s+/g, "");
                // check user input Y is valid
                userInput.question("Y: ", (yValue) => {
                  // check if y value is valid
                  if (validateInput(yValue)) {
                    y = yValue.replace(/\s+/g, "");
                    // if the users input correct calculate result & close
                    finalResult = calculate(x, y, operator);
                    userInput.close();
                  } else {
                    // re-prompt the user
                    userInput.setPrompt("Not a binary number!\nY: ");
                    // call the prompt
                    userInput.prompt();

                    // add listener. listen for the users input and help them
                    userInput.on("line", (yValue) => {
                      // check if the users input is correct
                      if (validateInput(yValue)) {
                        y = yValue.replace(/\s+/g, "");
                        // if the users input correct calculate result & close
                        finalResult = calculate(x, y, operator);
                        userInput.close();
                      } else {
                        // reset the prompt
                        userInput.setPrompt(`Not a binary number!\nY: `);
                        userInput.prompt();
                      }
                    });
                  }
                });
              } else {
                // re-prompt the user
                userInput.setPrompt("Not a binary number!\nX: ");
                // call the prompt
                userInput.prompt();

                // add listener. listen for the users input and help them
                userInput.on("line", (xValue) => {
                  // check if the users input is correct
                  if (validateInput(xValue)) {
                    x = xValue.replace(/\s+/g, "");
                    userInput.question("Y: ", (yValue) => {
                      // check if y value is valid
                      if (validateInput(yValue)) {
                        y = yValue.replace(/\s+/g, "");
                        // if the users input correct calculate result & close
                        finalResult = calculate(x, y, operator);
                        userInput.close();
                      } else {
                        // re-prompt the user
                        userInput.setPrompt("Not a binary number!\nY: ");
                        // call the prompt
                        userInput.prompt();

                        // add listener. listen for the users input and help them
                        userInput.on("line", (yValue) => {
                          // check if the users input is correct
                          if (validateInput(yValue)) {
                            y = yValue.replace(/\s+/g, "");

                            // if the users input correct calculate result & close
                            finalResult = calculate(x, y, operator);
                            userInput.close();
                          } else {
                            // reset the prompt
                            userInput.setPrompt(`Not a binary number! \nY: `);
                            userInput.prompt();
                          }
                        });
                      }
                    });
                    // if the users input is not correct
                  } else {
                    // reset the prompt
                    userInput.setPrompt(`Not a binary number! \nX: `);
                    userInput.prompt();
                  }
                });
              }
            });
          }
        }

        // if the users input is not correct
      } else {
        // reset the prompt
        userInput.setPrompt(
          `invalid operation: ${answer}. Try again \nChoose operation [+, -, q]: `
        );
        userInput.prompt();
      }
    });
  }
});

// this
function validateInput(string) {
  // remove spaces & change string to lowercase & split string into array
  const sArray = string.replace(/\s+/g, "").split("");
  // go through the elements in the string
  for (let char of sArray) {
    // check that the char is 0 or 1
    if (char != "0" && char != "1") {
      return false;
    }
  }
  // return true if all char are 0 or 1
  return true;
}
/** Takes one input argument x which is a binary digit (i.e.,
either 0 or 1) and returns a binary digit which is a result of
performing NOT operation with the input value.*/
function NOT_OP(x) {
  return ~x + 2;
}
/** Takes two input arguments x and y as binary digits (i.e.,
either 0 or 1) and returns a binary digit which is a result of
performing AND operation with the input values.*/
function AND_OP(x, y) {
  return x & y;
}
/**Takes two input arguments x and y as binary digits (i.e.,
either 0 or 1) and returns a binary digit which is a result of
performing OR operation with the input values. */
function OR_OP(x, y) {
  return x | y;
}
/** Takes two input arguments x and y as binary digits (i.e.,
either 0 or 1) and returns a binary digit which is a result of
performing Exclusive OR operation with the input
values. This function must be implemented by calling the
functions described above.*/
function XOR_OP(x, y) {
  return x ^ y;
}
/**Performs a single-bit addition operation by taking two input
arguments x and y as binary digits (i.e., either 0 or 1), and
returns a binary digit which is a result of adding the two
input arguments x and y (i.e. x + y) while considering c
which is carried over from the result of addition in the lower
digit (i.e. output of CARRY_BIT() function at the lower
digit). */
function ADD_BIT(x, y, c) {
  carry = CARRY_BIT(x, y, c);
  this.z = XOR_OP(x, y);
  return XOR_OP(carry, z);
}
/**Returns a value to be carried over to the higher digit when
calculating single-bit addition of x and y while considering
c which is carried over from the lower digit (i.e. output of
CARRY_BIT() function at the lower digit). */
function CARRY_BIT(x, y, c) {
  a = OR_OP(AND_OP(x, y), AND_OP(c, XOR_OP(x, y)));
  return a;
}
/**Performs single-bit subtraction operation by taking two input
arguments x and y as binary digits (i.e., either 0 or 1), and
returns a binary digit which is a result of subtracting y from
x (i.e. x – y) considering b which indicates it has lent to the lower digit subtraction (i.e. output of BORROW_BIT()
function at the lower digit)*/
function SUB_BIT(x, y, b) {
  let bin = XOR_OP(x, y);
  return XOR_OP(bin, b);
}
/**Returns whether if it had to borrow from the higher digit
when calculating the single-bit subtraction of x and y
considering b which indicates it has lent to the lower digit
(i.e. output of BORROW_BIT() function at the lower digit). */
function BORROW_BIT(x, y, b) {
  let w = NOT_OP(XOR_OP(x, y));
  let z = NOT_OP(x);
  return OR_OP(b * w, z * y);
}
/**Performs single-bit comparison by taking two input
arguments x and y as binary digits (i.e., either 0 or 1), and
returns a binary digit which indicates whether if x is less
than y considering l which was the result of comparing the
lower digit (i.e. output of LESS_THAN() function at the
lower digit). */
function LESS_THAN(x, y, l) {}
// calculate the addition and submission
function calculate(xNum, yNum, symbol) {
  // change string to array
  function change(string) {
    let chars = string.split("");
    for (let i = 0; i < chars.length; i++) {
      chars[i] = Number(chars[i]);
    }
    return chars;
  }

  var result = [];
  var l1 = change(xNum);
  var l2 = change(yNum);
  var carry = 0;

  // length of result
  if (l1.length < l2.length) {
    result.length = l1.length;
  } else {
    result.length = l2.length;
  }
  // if we are adding
  if (symbol === "+") {
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
    // check if there is a 1 in the carry to append to the start of the array
    if (carry != 0 || carry != "0") {
      result.unshift(carry);
    }
    //result.unshift(carry);
    return result.join("");
    // if we are taking
  } else if (symbol === "-") {
    return result.join("");
  } else {
    return "empty";
  }
}

// listen that the questions are closed i.e. valid inputs have been entered
userInput.on("close", () => {
  if (operator === "q") {
    console.log("\n program ended \n");
  } else {
    // check which string is longer
    let difference = finalResult.length;

    console.log(`\n ${x}`);
    console.log(`${operator} ` + `${y}`);
    console.log("-".repeat(difference * 2) + "");
    console.log(finalResult);
  }
});
