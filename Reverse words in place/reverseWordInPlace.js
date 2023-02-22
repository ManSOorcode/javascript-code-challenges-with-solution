//Q// Reverse words in place?

const stringName3 = "Hello!, Mansoor I would Like to meet you.";

const reverseStringinPlace = stringName3
  .split(" ")
  .map((el) => el.split("").reverse().join(""))
  .join(" ");

console.log(reverseStringinPlace);
