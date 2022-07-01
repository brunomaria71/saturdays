// Given a positive integer A, return an array of strings with all the integers from 1 to N.

// But for multiples of 3 the array should have “Fizz” instead of the number.

// For the multiples of 5, the array should have “Buzz” instead of the number.

// For numbers which are multiple of 3 and 5 both, the array should have “FizzBuzz” instead of the number.

// Look at the example for more details.

// Example

// A = 5
// Return: [1 2 Fizz 4 Buzz]

// let num = 15;

// function fizzBuzz(num) {
//   let result = [];

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(fizzBuzz(num));

//Answer one:

let a = 15;

function fizzBuzz(a) {
  let string = "",
    arr = [];
  for (let i = 1; i <= a; i++) {
    if (i % 3 == 0) {
      string = string + "Fizz";
    }
    if (i % 5 == 0) {
      string = string + "Buzz";
    } else if (i % 3 != 0) {
      string = string + i;
    }
    string = string + " ";
  }
  arr.push(string.trim());
  return arr;
}

console.log(fizzBuzz(a));

// or you can do let i % 15 === 0 it will push fizzbuzz
