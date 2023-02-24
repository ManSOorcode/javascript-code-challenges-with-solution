//Q// Remove duplicate members from an array?//done

// const arr = [1, 2, 5, 5, 6, 7, 8, 3, 9, 9, 9, 5];

// const elementRemove = (arr) => {
//solution #1
//   console.log([...new Set(arr)]);//[1,2,5,6,7,8,3,9]
//solution #2
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr.indexOf(arr[i]) !== i) {
//     newArr[newArr.length] = arr[i];
//   }
// }
// return newArr;
//solution #3
// const newArr = arr.filter((el, i, arr) => i === arr.indexOf(el));
// return newArr;
// };

// console.log(elementRemove(arr));

//Q// Merge two sorted array?//done

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// console.log([...arr1, ...arr2]);

//Q// Swap two numbers without using a temp variable?//done

// const stringNum = [2, 3];

// let [first, second] = stringNum;

// [second, first] = [first, second];

// console.log(first, second);

//Q// Reverse a string in JavaScript?//done

// const stringName = "Hello!, Mansoor I would Like to meet you.";

// const reverseString = stringName.split(" ").reverse().join(" ");
// console.log(reverseString);

//Q// Reverse words in a sentence?//done
// const stringName2 = "Hello!, Mansoor I would Like to meet you.";

// const reverseString2 = stringName.split("").reverse().join("");
// console.log(reverseString2);

//Q// Reverse words in place?//done

// const stringName3 = "Hello!, Mansoor I would Like to meet you.";

// const reverseStringinPlace = stringName3
//   .split(" ")
//   .map((el) => el.split("").reverse().join(""))
//   .join(" ");

// console.log(reverseStringinPlace);

//Q// Find the first non repeating char in a string?//done

// const longestString = "mansoor";

// const nonReapeatingWord = longestString
//   .split("")
//   .find((el, i, arr) => i === arr.indexOf(el));

// console.log(nonReapeatingWord);

//Q// Remove duplicate characters from a sting?

const fullName = "Mansoor Khan Anis";

const removeDuplicate = (str) => {
  return str
    .toLowerCase()
    .trim()
    .split("")
    .filter((el, i, arr) => i == arr.indexOf(el))
    .join("");
};
console.log(removeDuplicate(fullName));

//Q// Verify a word as palindrome?//done

// const palindrom = "racecar";

// function palindromChecker(pali) {
//   const palindrom = pali.toLowerCase();
//   const reversePalindrom = pali.toLowerCase().split("").reverse().join("");
//   console.log(reversePalindrom);
//   return palindrom === reversePalindrom;
// }

// console.log(palindromChecker("racecar"));

// Q// Generate random between 5 to 7 by using defined function.//done

// function randomGenerator(value) {
//   return Math.floor(Math.random() * 3) + 5;
// }
// console.log(randomGenerator());

//Q//  Find missing number from unsorted array of integers.//done

// function findMissingNumber(arr) {
//   const sortedArrar = arr.sort((a, b) => a - b);

//   const startNUm = sortedArrar[0];
//   const endNum = sortedArrar.at(-1);

//   let missingNum = [];

//   for (let i = startNUm; i <= endNum; i++) {
//     sortedArrar.indexOf(i) === -1 ? (missingNum[missingNum.length] = i) : -1;
//   }

//   return missingNum;
// }

// console.log(findMissingNumber([1, 5, 6, 3, 9, 2, 4]));
// console.log(findMissingNumber([1, 3, 5, 7, 9, 12]));
// console.log(findMissingNumber([2, 4, 6, 8, 10, 13]));
//[1, 2, 3, 4, 5, 6, 9]

//Q// Check whether any two numbers in an array sums to a given number?//done
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

//

// console.log(arr);

// // let resultArr = [];

// let length = arr.length;
// for (let i = 0; i < length; i++) {
//   // resultArr[resultArr.length] = target - arr[i];
//   // if (resultArr[arr[i]]) {
//   //   console.log("hurray");
//   // }

//   // target = target + arr[i];

//   // if (resultArr.length === arr.length) console.log("lol");
//   console.log(arr[i], arr[i + 1]);
//   if (arr[i] + arr[i + 1] === target) {
//     console.log(arr.indexOf(arr[i]), arr.lastIndexOf(arr[i + 1]));
//     console.log("hurray");
//   }
//   console.log(target);
//   // console.log(resultArr.indexOf(arr[i]));
// }

// resultArr.filter((el, i) => console.log(arr.indexOf(el)));

// return resultArr;

// console.log(sum([2, 7, 11, 15], 9));

//output

//Q// Total number of zeros from 1 upto n?

// console.log();

//Q// Match substring of a string?

// const subString = "fox";

// const longSentence = "long nose fox run over lazy dog";

// console.log(longSentence.includes(subString));

// // or

// function matchSubString(str, substr) {
//   // 'string'.substring
//   console.log(
//     str.substring(str.indexOf(substr), str.indexOf(substr) + substr.length) ===
//       substr
//   );
// }

// console.log(matchSubString(longSentence, subString));

/*Verify a prime number?*/ //done

// const numArr = [2, 4, 7, 9, 6, 34, 67];
//solution #1
// function findPrimes(limit) {
//   let isPrime = [];
//   let primes = [];
//   for (let i = 2; i <= limit; i++) {
//     isPrime[i] = true;
//   }

//   console.log(isPrime);
//   for (let i = 2; i <= limit; i++) {
//     if (isPrime[i]) {
//       primes.push(i);
//       for (let j = i * i; j <= limit; j += i) {
//         isPrime[j] = false;

//         console.log(j);
//       }
//     }
//   }
//   return primes;
// }

// const primes = findPrimes(20);
// console.log(primes); // [2, 3, 5, 7, 11, 13, 17, 19]
// // solution #2
// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false

// function mul(x) {
//   return function (y) {
//     return {
//       result: x * y,
//       sum: function (z) {
//         return x * y + z;
//       },
//     };
//   };
// }
// console.log(mul(2)(3).result);
// console.log(mul(2)(3).sum(4));

// Input: “adsjfdsfsfjsdjfhacabcsbajda”

// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

// const RepeatedString = "adsjfdsfsfjsdjfhacabcsbajda";

// const obj = {};

// const value = RepeatedString.split("").filter((el, i, arr) => {
//   const repatd = i === arr.indexOf(el);
//   console.log(repatd);
// });

// console.log(value);
