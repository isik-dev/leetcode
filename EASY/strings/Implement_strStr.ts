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

// console.log(haystack.indexOf(needle)); -> returns 2 (indexOf method returns the index of the first occurence of the given substring inside a string);



// 1. Brute Force
// Brainstorming the brute force solution -> an easy solution with JS generic method: indexOf
function strStr(haystack: string, needle: string): number {
    if (needle.length <= 0) return 0;
    return haystack.indexOf(needle);
}

// 2. Naive Algorithm for Pattern Searching
function naiveApproach(haystack: string, needle: string): number {
    if (!needle.length) return 0;
    if (needle.length > haystack.length) return -1;
    let output = -1
    let possibleMatch = '';

    // loop through the haystack and find the first matching letter with needle
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] === needle[0] && possibleMatch !== needle) {
        // once we find the first case we enter into our second loop
            // in our second loop, we check if the subsequent letters match as well
            output = i;
            for (let k = 0; k < needle.length; k++) {
                if (haystack[i + k] !== needle[k]) {
                    possibleMatch = ''
                    break;
                }
                possibleMatch += needle[k];
            }
        }
    }
    return possibleMatch === needle ? output : -1;
}

console.log(naiveApproach("mississippi", "issippi"))


// 2. Solving for the space & time complexity.