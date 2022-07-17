// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// * ----------------------------------------------------------------------> Solution <---------------------------------------------------------------------- * //

// Brute Force Approach:

// 1. select the shortest word
// 2. approach from three different sides: pop start, pop end, pop both
// 3. check if any if any of those three new words exist in the other words
// 4. if yes, append to the record, else pass

// 5. repeat the whole process until the length of all three words are less than the record

// floweritta
//
//                                                             // * flower * //
//                                                     // * flowe -- lowe -- lower * //
//                                                 // * flow -------- ow -------- ower * //
//                                             // * flo ------------- ow ------------- wer * //
//                                         // * fl ------------------ ow ------------------ er * //
//                                     // * f ----------------------- ow ----------------------- r * //
//
// fluskfloridalowr

// 1 thing to do, would be picking the longest word and looping to drop off letters which either of the given words do not have
// flflorlower

const searchCommonPrefix = (input: Array<string>): string => {
  let shortestWord: string;
  input.forEach((word) => {
    if (word.length > shortestWord.length) {
    }
  });
  return 's';
};
