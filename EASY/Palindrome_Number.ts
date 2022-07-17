// Given an integer X, return true if X is palindrome.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Follow up: try to solve it without converting an integer to a string

// ------------------------------------------------> assuming the input the input is a string <----------------------------------------------------------------
// BRUTE FORCE:
//this approach does not work as in JavaScript objects and arrays are compared by reference and not by value.
const reverseAndCompareArray = (x: string) => {
  const original = x.split('');
  const reversed = x.split('').reverse();

  if (original === reversed) {
    return true;
  }
  return false;
};

// console.log('reverse and compare an array', reverseAndCompareArray('bob'));

const reverseAndCompareArrayValues = (x: string) => {
  const original = x.split('');
  const reversed = x.split('').reverse();
  for (let i = 0; i <= original.length; i++) {
    if (original[i] !== reversed[i]) {
      console.log(`contradicting values: ${original[i]} and ${reversed[i]}`);
      return false;
    }
  }
  return true;
};

// console.log(
//   'reverse and compare values of an array',
//   reverseAndCompareArrayValues('loml')
// );

// ------------------------------------------------> without turning integer into string <----------------------------------------------------------------
const palindromeNumber = (x: number) => {
  let input = x;
  let reversed = 0;
  while (input > 0) {
    reversed = reversed * 10 + (input % 10);
    input = Math.floor(input / 10);
  }
  if (x === reversed) {
    return true;
  }
  return false;
};

// console.log(palindromeNumber(121));

// a much smarter way would be reverting only the half of a given integer. Because if it is palindrome the other half should always be exactly the same
const palindromeFaster = (x: number) => {
  // before running our algorithm let's check for edge cases:
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversed = 0;
  // run only till we reach half
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};

console.log(palindromeFaster(121));
