// Given two binary strings a and b, return their sum as a binary string.

// ------------------------------------------------------------------------------------

// TODO: Understand how binary additions work:

// Decimal system: (0 ~ 9). In the decimal system, depending on the position of a single decimal we multiply it
// by the corresponding power of 10. I.e.: 172 is calculated as => (1 * 100) + (7 * 10) + (2 * 1) and so on and so forth.

// Binary system: (0 ~ 1). In the binary system we do almost the same but instead of 10 we use 2.
// I.e.: 1001 is calculated as => (1 * 2^3) + (0 * 2^2) + (0 * 2^1) + (1 * 2^0) = 8 + 0 + 0 + 1 => 9.

// Binary addition: Binary addition works in a slightly different manner. If the sum of two digits exceed 1, then
// we shift a digit to left. For instance: 1 + 0 = 1, 0 + 1 = 1, 1 + 1 = 10, 10 + 1 = 11.

// * ------------------------------------- Solution ------------------------------------- * //

// Start Time: 19:17 - End Time: 20:22 (Haven't found the right solution yet)
// Brute Force solution:

// from the given inputs find the longest string and loop.
// for each character at a given index check if the corresponding character exists in the second string,
// if no just push that character into the output string, else add and check if the sum > 1, if yes push 10 else push that
// character itself.

// for this you might consider using js push() method. as it mutates the existing arr, it changes the end of the arr

// 1001
// 0001

// 1

// ATTEMPT 1
function addBinary(a: string, b: string): string {
  const longestBinary = a.length >= b.length ? a.split('') : b.split('');
  let shortestBinary = a.length <= b.length ? a.split('') : b.split('');
  let output: Array<string> = [];

  while (longestBinary.length > shortestBinary.length) {
    shortestBinary.unshift('0');
  }

  //   console.log('longestBinary', longestBinary);
  //   console.log('shortestBinary', shortestBinary);

  for (let i = longestBinary.length - 1; i >= 0; i--) {
    if (!shortestBinary[i]) {
      console.log('b[i] does not exist');
      output.unshift(longestBinary[i]);
    } else {
      if (Number(longestBinary[i]) + Number(shortestBinary[i]) === 2) {
        output.unshift('10');
      } else {
        console.log(
          'unshifting number',
          String(Number(longestBinary[i] + Number(shortestBinary[i])))
        );
        console.log('longestBinary', longestBinary[i]);
        console.log('shortestBinary', shortestBinary[i]);
        output.unshift(
          String(Number(longestBinary[i] + Number(shortestBinary[i])))
        );
      }
    }
  }
  return output.join('');
}

// console.log(addBinary('10', '1'));

// ATTEMP 2
function matchStrAndAddBinary(a: string, b: string): string {
  const diff = Math.abs(a.length - b.length);
  const longest = a.length >= b.length ? a.split('') : b.split('');
  let shortest = a.length < b.length ? a.split('') : b.split('');

  if (longest.length !== shortest.length) {
    for (let i = 0; i < diff; i++) {
      shortest = ['0', ...shortest];
    }
  }

  let binOutput: Array<string> = [];
  let carry = 0;

  for (let i = longest.length - 1; i >= 0; i--) {
    let sum: number = carry + Number(longest[i]) + Number(shortest[i]);
    if (sum === 3) {
      carry = 1;
      binOutput = ['1', ...binOutput];
    } else if (sum === 2) {
      carry = 1;
      binOutput = ['0', ...binOutput];
    } else {
      carry = 0;
      binOutput = [String(sum), ...binOutput];
    }
  }

  if (carry > 0) {
    binOutput = ['1', ...binOutput];
  }

  return binOutput.join('');
}

console.log(matchStrAndAddBinary('1011', '11'));
console.log(matchStrAndAddBinary('1', '11'));
console.log(matchStrAndAddBinary('1010', '1011'));
