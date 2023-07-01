// two sums using Big O on N

let nums = [2, 7, 14, 15];

let target = 22;

// function twoSums (nums, target) {
//     let hm = {}
//     for(let i = 0; i < arr.length; i++) {
//         if (hm[nums[i]] {
//             return [hm[nums[i]]]
//         })
//     }

// }

function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}
