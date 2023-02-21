//Q// Remove duplicate members from an array?

const arr = [1, 2, 5, 5, 6, 7, 8, 3, 9, 9, 9, 5];

const elementRemove = (arr) => {
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
};

console.log(elementRemove(arr));
