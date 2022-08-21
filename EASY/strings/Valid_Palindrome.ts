// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
// all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// * ------------------------------------- Solution ------------------------------------- * //

// 1. convert all uppercase letters to lowercase:
//    --> use toLowerCase() js built in method (check if it interferes with non alphanumeric values)
// 2. filter out non alphanumeric chars -> check if there is any built in method

// -------------------------------- Brute Force Solution -------------------------------- //

// - using toLowerCase() to turn s into lowercase
// - using \W Metacharacter to remove non alphanumeric chars
// - using A-za-z0-9 regex to remove non alphanumeric chars: replace(/[^A-za-z0-9]/g, '')
// - using replace() to replace non alphanumeric chars with an empty string

// regular Expression usage: regex structure is //g
// for instance: /\W/g
// for instance: /[^A-za-z0-9]/g

function isPalindrome(s: string) {
  const init = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

  const reverse = init.split('').reverse().join('');
  return reverse;
}

console.log(isPalindrome('ab_a'));
