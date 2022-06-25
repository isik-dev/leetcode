// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// * 6 instances where the substraction is used * //
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// * ----------------------------------------------------------------------> Solution <---------------------------------------------------------------------- * //

// brute force solution:
const romanToIntegerBruteForce = (x) => {
  const chars = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const newArr = x.split('');
  let res = 0;
  for (let i = newArr.length - 1; i >= 0; i--) {
    if (chars[newArr[i]] > res || chars[newArr[i]] === chars[newArr[i + 1]]) {
      res += chars[newArr[i]];
    } else {
      res -= chars[newArr[i]];
    }
  }
  return res;
};

// console.log(romanToIntegerBruteForce('CXLIV'));

// faster and less memory usage
const superSonicSpeed = (s) => {
  let ans = 0;
  let num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    switch (s.charAt(i)) {
      case 'I':
        num = 1;
        break;
      case 'V':
        num = 5;
        break;
      case 'X':
        num = 10;
        break;
      case 'L':
        num = 50;
        break;
      case 'C':
        num = 100;
        break;
      case 'D':
        num = 500;
        break;
      case 'M':
        num = 1000;
        break;
    }
    if (4 * num < ans) {
      ans -= num;
    } else {
      ans += num;
    }
  }
  return ans;
};

console.log(superSonicSpeed('CXLIV'));
