//Q// Check whether any two numbers in an array sums to a given number?
// const input = [1,2,5,4,6,8,7,9]

/*Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

/*Input: nums = [3,2,4], target = 6
Output: [1,2] */

/*Input: nums = [3,3], target = 6
Output: [0,1] */

//let's creat question

//[2, 7, 11, 15] this will be our target value 9

// let target = 9;

function sum(arr, target) {
  const prevElement = {};

  for (let i = 0; i < arr.length; i++) {
    if (prevElement[arr[i]] >= 0) {
      //here if find out that number of arr present in object it will return index of that number and current number
      return [prevElement[arr[i]], i];
    }
    prevElement[target - arr[i]] = i; //saving number with index in object
  }
  return []; //for any sum it will return empty
}

console.log(sum([2, 7, 11, 15], 9));
console.log(sum([3, 2, 4], 6));
console.log(sum([3, 3], 6));
