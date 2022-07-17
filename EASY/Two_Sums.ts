// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// brute force solution
function twoSums(nums: Array<number>, target: number) {
  for (let i = 0; i < nums.length; i++) {
    console.log('this is i being looped', i);
    for (let j = 0; j < nums.length; j++) {
      console.log('and this is j being looped', j);
      if (i != j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

// console.log(twoSums([1, 2, 3, 4, 5, 6], 9));
// console.log(twoSums([6, 14, 3, 21, 19], 40));

// using Set object
function twoSumsWithSet(nums: Array<number>, target: number) {
  const mySet = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    let latter = target - nums[i];
    if (mySet.has(latter)) {
      if (i !== nums.indexOf(latter)) {
        return [i, nums.indexOf(latter)];
      }
    }
  }
}
console.log(twoSumsWithSet([0, 2, 4, 3, 6], 5));
console.log(twoSumsWithSet([3, 2, 4], 6));
