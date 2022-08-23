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
// - using \W Metacharacter to remove non alphanumeric chars (however underscore is considered to be an alphanumeric character)
// - using A-za-z0-9 regex to remove non alphanumeric chars: replace(/[^A-za-z0-9]/g, '')
// - using replace() to replace non alphanumeric chars with an empty string

// regular Expression usage: regex structure is //
// for instance: [^\W]
// for instance: [^A-Za-z0-9]
// g should be used for a global search inside that regex

function isPalindrome(s: string): boolean {
    const filtered = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const reverse = filtered.split('').reverse().join('');
    
    return filtered === reverse;
};

console.log(isPalindrome('ab_a'));


// -------------------------------- Faster Solution With Pointers -------------------------------- //

// function superSonicPalindromeChecker(s: string) {
//   let pointer = 0;
//   let pointer2 = s.length - 1;

//   while (pointer < pointer2) {
//     if ()
//   }
// }