// Run [ npm install jquery ] in terminal to add jquery

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
    this.c = CARRY_BIT(x, y, c);
    this.z = XOR_OP(x, y);
    return XOR_OP(c, z);
  }
  /**Returns a value to be carried over to the higher digit when
calculating single-bit addition of x and y while considering
c which is carried over from the lower digit (i.e. output of
CARRY_BIT() function at the lower digit). */
  function CARRY_BIT(x, y, c) {
    carry = OR_OP(AND_OP(x, y), AND_OP(c, XOR_OP(x, y)));
    return carry;
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
