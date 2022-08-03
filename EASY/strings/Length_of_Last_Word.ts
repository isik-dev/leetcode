// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


// * ------------------------------------- Solution ------------------------------------- * //

// 1. Brute Force Approach:(
// As the type of the input is a string, and the question asks to return the length of the last word.
// I would that that whole string, start looping from the end, with two conditions:

//      1. I should not be counting any spaces until I discover the first character, 
//      2. From there on, I should be counting until I discover the second space.

// possible cases: 'clo____ne__' | 'r__em__emb_er'

// check if length -1 === ' ', if true run one approach, else run another
function lengthOfLastWord(s: string): number {
    let isStartingPoint: boolean = false;
    let isStoppingPoint: boolean = false;
    let output: string = '';

    let pointer: number = s.length - 1;

    while (!isStartingPoint) {
        if (s[pointer] !== ' ') {
            isStartingPoint = true;
        } else {
            pointer--
        }
    }
    while (!isStoppingPoint && isStartingPoint && pointer >= 0) {
        if (s[pointer] === ' ')  {
            isStoppingPoint = true;
        } else {
            output += s[pointer];
            pointer--
        }
    }
    return output.length;

    
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord(" j p n "))