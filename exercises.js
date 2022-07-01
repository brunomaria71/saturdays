// Return the sum of all numbers  (elements) in an array.

// You can use ‘for of’ or classic ‘For.’

// ‘For in’ is mainly used for objects. Its not really used for this equation.
// The classic ‘for’ lets you start at the beginning or end
// ‘For of’ is used when traversal order does not matter.

// Ex 1 on solution: 

const input = [1,2,3,4,5];

const classicForLoopSum = (arr) => {
	 let sum = 0 
	For (let i = 0; i < arr.length; i++) {
	sum = sum + arr[i]
	}
	return sum;
}

console.log(“the classic sum is”, classicForLoopSum(input))

// Ex2 on solution in the for of:


const input = [1,2,3,4,5];

function forOfSum (arr){
	let sum = 0 
	For (const num of arr){
	sum = sum + num 
	}
	return sum;
}

console.log(“the for of sum is”, forOfSum(input))

// Ex 3 on for in: 

Const input = [1,2,3,4,5];

Const forInSum = (arr) => {
	let sum = 0 

	For (const num of arr) {

	sum = sum + num 

	}

	Return sum;
}

console.log(“the for in sum is”, forInSum(input));

Const forInSum = (obj) => {

	let sum = 0 

	For (const property in obj) {

	sum = sum + obj[property] 

	}

	Return sum;
}

Const object = { a:1, b: 2, c:3, d:4, e:5 }

console.log(“the for in sum is”, forInSum(input))

