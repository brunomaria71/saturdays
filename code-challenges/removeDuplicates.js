// Remove Duplicates from Sorted Array
// Given an integer array (nums) sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

// in the TDLR version, loop through the whole thing. take out the duplicate numbers, and add the numbers up to return the total of non-duplicate numbers

/* for each number in the array, check to make sure the previous num isnt the same.*/
/* if the number is not a duplicate, remove the number from the array, we're goiing to return the length of the array/ */

/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1, 2, 3, 3];
function removeDuplicates(nums) {
  // if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // looping through, we're doing the -1, so when we compare the second to the last element to the last el, we dont go out of bounds
    if (nums[i] === nums[i + 1]) {
      // this line is grabbing the first index, 1 in this case, and comparing it to i+1, which is 1 + 1 over, which is 2. and so on. let's see with 3. if 3 comparing to 3, if enters the if stmt.
      nums.splice(
        i + 1,
        1
      ); /* Since the elements are equal, it enters the if condition.
      It removes the element at index i + 1, which is nums[3], the 1 specifies the number of elements to be removed. After the removal, the array becomes: [1, 2, 3] */
      i--; // i--;: This line decrements the value of i by 1. This is done to ensure that the loop correctly checks the next element after removing the duplicate element. Since the array is modified by removing an element, we need to decrement i to recheck the current index in the next iteration.//
    }
  }
}
console.log(removeDuplicates());
