//Q// Verify a word as palindrome?//done

const palindrom = "racecar";

function palindromChecker(pali) {
  const palindrom = pali.toLowerCase();
  const reversePalindrom = pali.toLowerCase().split("").reverse().join("");
  console.log(reversePalindrom);
  return palindrom === reversePalindrom;
}
