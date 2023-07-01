// Return the sum of all numbers  (elements) in an array.

// You can use ‘for of’ or classic ‘For.’

// ‘For in’ is mainly used for objects. Its not really used for this equation.
// The classic ‘for’ lets you start at the beginning or end
// ‘For of’ is used when traversal order does not matter.

// Ex 1 on solution:

const firstInput = [1, 2, 3, 4, 5];

const classicForLoopSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log("the classic sum is", classicForLoopSum(firstInput));

// Ex2 on solution in the for of:

const secondInput = [1, 2, 3, 4, 5];

function forOfSum(arr) {
  let sum = 0;
  for (const num of arr) {
    sum = sum + num;
  }
  return sum;
}

console.log("the for of sum is", forOfSum(secondInput));

// Ex 3 on for in:

const thirdInput = [1, 2, 3, 4, 5];

const forInSum = (arr) => {
  let sum = 0;

  for (const num of arr) {
    sum = sum + num;
  }

  return sum;
};

console.log("the array for in sum is", forInSum(thirdInput));

const forInSum2 = (obj) => {
  let sum = 0;

  for (const property in obj) {
    sum = sum + obj[property];
  }

  return sum;
};

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

console.log("the object for in sum is", forInSum2(object));
