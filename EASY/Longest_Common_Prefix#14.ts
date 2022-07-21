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

const searchCommonPrefix = (allWords: Array<string>): string => {
  if (allWords.length === 0) {
    return '';
  }
  if (allWords.length === 1) {
    return allWords[0];
  }
  let possiblePrefix = '';

  while (allWords.every((str) => str.startsWith(possiblePrefix))) {
    const newPossiblePrefix = allWords[0].substring(
      0,
      possiblePrefix.length + 1
    );

    console.log('pp', possiblePrefix);
    console.log('npp', newPossiblePrefix);

    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix;
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix;
    } else {
      break;
    }
  }

  return possiblePrefix.slice(0, -1);
};

// console.log(searchCommonPrefix(['one', 'ontwon', 'onginonrmous', 'onthron']));

const bruteForceSolution = (allWords: Array<string>): string => {
  if (!allWords.length) {
    return '';
  }
  if (allWords.length === 1) {
    return allWords[0];
  }

  let prefix = '';
  const shortestWord = allWords.reduce((a, b) =>
    a.length <= b.length ? a : b
  );

  for (let i = 0; i <= shortestWord.length - 1; i++) {
    for (let j = 0; j <= allWords.length - 1; j++) {
      if (allWords[j] === shortestWord) {
        continue;
      }
      if (prefix[i] === shortestWord[i]) {
        continue;
      } else if (shortestWord[i] === allWords[j][i]) {
        prefix += shortestWord[i];
      } else {
        break;
      }
    }
  }
  return prefix;
};

console.log(bruteForceSolution(['one', 'ontwon', 'onginonrmous', 'onthron']));
console.log(bruteForceSolution(['jonek', 'montario', 'ten', 'len']));
