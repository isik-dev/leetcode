// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// * ------------------------------------- Solution ------------------------------------- * //

// 1. Brute Force

enum STypes {
  BO = "(",
  BC = ")",
  SO = "[",
  SC = "]",
  CO = "{",
  CC = "}"
}

const isValid = (s: string): boolean => {
  const input = s.split("");
  let output: boolean = false;
  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i + 1]) {
      if (input[i] === STypes.BO && input[i + 1] === STypes.BC) {
        output = true;
      } else if (input[i] === STypes.SO && input[i + 1] === STypes.SC) {
        output = true;
      } else if (input[i] === STypes.CO && input[i + 1] === STypes.CC) {
        output = true;
      } else {
        output = false
      }
    }
  }
  return output;
};

console.log(isValid("()["));

// FIXME: the algorithm does not work for cases as "{[]}"
// TODO: I can probably consider dividing the cases into two collections: openBrackets && closeBrackets
//       loop and push each value to its corresponding collection and compare those two collections at the end