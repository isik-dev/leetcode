// ------------------------------------------------------------------------------------------------
// Methods for reversing a String

// 1-Step. slip the input and return array
// 2-Step. reverse this returned array and return it
// 3-Step. join the array back to return ouput string

const myString = 'helloWorld';

const stringTransformer = (input) => {
  return input.split('').reverse().join();
};

const stringTransformer2 = (input) => {
  let reversed = '';
  for (const char of input) {
    reversed = char + reversed;
  }
  return reversed;
};

const stringTransformer3 = (input) => {
  return input
    .split('')
    .reduce((reversed, character) => character + reversed, '');
};

// console.time('stringTransformer');
// console.log(stringTransformer3(myString));
// console.timeEnd('stringTransformer');

// ------------------------------------------------------------------------------------------------
// Array.prototype.reduce()

const myReducer = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// console.log(myReducer([2, 1, 3]));

// with built-in function (this mutates and returns the existing array)
const arrayReverser = (arr) => {
  return arr.reverse();
};

// slice and reverse -> creates and returns a new array
const arrayReverser2 = (arr) => {
  return arr.slice().reverse();
};

const arrayReverser3 = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => [currentValue, ...accumulator],
    []
  );
};

// acc = []; currentVal = 1 // => [1]
// acc = [1]; currentVal = 2 // => [2, 1]
// acc = [2,1]; currentVal = 3 // => [3, 2, 1]
// acc = [3, 2, 1]; currentVal = 4 // => [4, 3, 2, 1]
// acc = [4, 3, 2, 1]

// const testArr = [1, 2, 3, 4];
// console.time('reverse');
// console.log(arrayReverser3(testArr));
// console.timeEnd('reverse');
// console.log('after the func', testArr);
