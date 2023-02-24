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
