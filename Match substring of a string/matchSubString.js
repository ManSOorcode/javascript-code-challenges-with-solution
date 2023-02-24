//Q// Match substring of a string?

const subString = "fox";

const longSentence = "long nose fox run over lazy dog";

console.log(longSentence.includes(subString));

// // or

function matchSubString(str, substr) {
  console.log(
    str.substring(str.indexOf(substr), str.indexOf(substr) + substr.length) ===
      substr
  );
}

console.log(matchSubString(longSentence, subString));
