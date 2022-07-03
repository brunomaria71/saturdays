// Create a function that takes an array containing only numbers and return the first element.

const arr = [7, 8, 9, 10];

function getFirst(arr) {
  return arr.shift();
}

console.log(getFirst(arr));
