//Q// Find the first non repeating char in a string?

const longestString = "mansoor";

const nonReapeatingWord = longestString
  .split("")
  .find((el, i, arr) => i === arr.indexOf(el));

console.log(nonReapeatingWord);
