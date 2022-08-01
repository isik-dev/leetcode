// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. 
// This is consistent to C's strstr() and Java's indexOf().


// * ------------------------------------- Solution ------------------------------------- * //


const haystack = 'mayoryor';
const needle = 'yor';

// console.log(haystack.includes(needle)) -> return true

// console.log(haystack.indexOf(needle)); -> returns 2 (indexOf method return the index of the first occurence of the given substring inside a string);



// 1. Brute Force
// Brainstorming the brute force solution -> an easy solution with JS generic method: indexOf
function strStr(haystack: string, needle: string): number {
    if (needle.length <= 0) return 0;
    return haystack.indexOf(needle);
}

// 2. Naive Algorithm for Pattern Searching
function naiveApproach(text: string, pattern: string): number {
    if (!pattern.length) return 0;
    
    let txtLength = text.length;
    let patLength = pattern.length;
    let output = -1;
    
    for (let i = 0; i <= txtLength - patLength + 1; i++) {
        if (text[i] === pattern[0]) {
            for (let k = 0; k < patLength; k++) {
                if (text[i + k] !== pattern[k]) {
                    console.log('last to be recorded', k)
                    break;
                }
                output = i
            }
        }
    }
    return output;
}

console.log(naiveApproach("mississippi", "issip"))


// 2. Solving for the space & time complexity.