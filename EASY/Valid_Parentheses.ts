// // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// // An input string is valid if:

// // Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.

// // * ------------------------------------- Solution ------------------------------------- * //

// // 1. Brute Force

// const OpenTypes = {
//   BO: "(",
//   SO: "[",
//   CO: "{",
// }

// const CloseTypes = {
//   BC: ")",
//   SC: "]",
//   CC: "}"
// }

// const openList = ['(', '{', '['];
// const closeList = [')', '}', ']'];

// const isValid = (s: string): boolean => {
//   const input = s.split("");
//   let output: boolean = false;


//   let open: Array<string> = [];
//   let close: Array<string> = [];


//   for (let i = 0; i <= input.length - 1; i++) {
//     if (openList.includes(input[i])) {
//       open.push(input[i])
//     } else {
//       close.unshift(input[i])
//     }

//     let iterator = 0
//     while (iterator <= open.length - 1) {
//       if (open[iterator] === close[iterator]) {
//         output = true
//       } else {
//         output = false
//       }
//       iterator++
//     }
//   }
//   console.log('openList', open)
//   console.log('closeList', close)
//   return output;
// };

// // console.log(isValid("()[]"));

// // FIXME: the algorithm does not work for cases as "{[]}"
// // TODO: I can probably consider dividing the cases into two collections: openBrackets && closeBrackets
// //       loop and push each value to its corresponding collection and compare those two collections at the end

// class Stack {
//   items: Array<number>
//   count: number
//   constructor() {
//     this.items = []
//     this.count = 0
//   }

//   // Add element on top of stack
//   push(element: number) {
//     this.items[this.count] = element
//     console.log(`${element} added to ${this.count}`)
//     this.count += 1
//     return this.count - 1
//   }

//   // Remove and return the top element
//   pop() {
//     if (this.count === 0) return undefined
//     let deleteItem = this.items[this.count - 1]
//     this.count -= 1
//     console.log(`${deleteItem} has been removed`)
//     return deleteItem;
//   }
// }


// const stack = new Stack();
// stack.push(100);
// stack.push(200);
// stack.push(300);
// stack.pop();
// stack.pop();
// console.log(`Current items: `, stack.items)


const isValid = (s: string): boolean => {
  for (let i = 0; i <= s.length - 1; i++) {
    if (i)
  }
}