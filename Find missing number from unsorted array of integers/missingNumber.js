//Q//  Find missing number from unsorted array of integers.

function findMissingNumber(arr) {
  const sortedArrar = arr.sort((a, b) => a - b);
  const startNUm = sortedArrar[0];
  const endNum = sortedArrar.at(-1);

  let missingNum = [];

  for (let i = startNUm; i <= endNum; i++) {
    sortedArrar.indexOf(i) === -1 ? (missingNum[missingNum.length] = i) : -1;
  }

  return missingNum;
}

console.log(findMissingNumber([1, 5, 6, 3, 9, 2, 4]));
console.log(findMissingNumber([1, 3, 5, 7, 9, 12]));
console.log(findMissingNumber([2, 4, 6, 8, 10, 13]));
