// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// * ------------------------------------- Solution ------------------------------------- * //

// 1. Brute Force
// Brainstorming the brute force solution

// You can notice that there is a common pattern to this problem. Given a random input containing " '(', ')', '{', '}', '[', ']' " characters, a solution can only be seen once we reach a closed bracket. Meaning, if our input is: 
// "{[()]}", the answer does not come until after we reach index 3. That's because it is the first closing bracket. Now to the question, is this a valid compliment, we just have to check the character before it, i.e index 2.
// If those two are matching pair, then we consider this pair as valid and check the next pair. Doing so, we can find out if the whole input is valid.

// An Algorithm/Data Structure needed to solve: A simple for loop and a stack DS. 

const pairsObject: Record<string, string> = {
  ')': '(',
  '}': '{',
  ']': '['
  }

const Validator = (s: string) => {
  if (s.length === 0 || s.length === null) {
    return false;
  }
  
  let stack: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    if (Object.keys(pairsObject).includes(s[i])) {
      if (stack.pop() != pairsObject[s[i]]) {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
}

// console.log(Validator('{{{{{}}}}}()'));

// 2. Faster solution

const isValid2 = (s: string): boolean => {

  if (!s.length || s.length % 2 !== 0) return false;

  const stack: Array<string> = [];
  const chars = s.split('');

  for (const char of chars) {
    if (isClosingBracket(char)) {
      const openingBracket = stack.pop();

      if (pairsObject[char] !== openingBracket) return false
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0
}

const isClosingBracket = (s: string): boolean => {
  return pairsObject.hasOwnProperty(s);
}

const brackets: {[key: string]: string} = {
  ']': '[',
  '}': '{',
  ')': '(' 
}

function isValid(s: string): boolean {
  const stack: string[] = []
  const chars = s.split('')

  for (const char of chars) {
    if (isClosing(char)) {
      const opening = stack.pop()

      if (brackets[char] !== opening) { return false }
    } else { stack.push(char) }
  }

  return stack.length === 0
}

function isClosing(s: string): boolean {
  return brackets.hasOwnProperty(s)
}