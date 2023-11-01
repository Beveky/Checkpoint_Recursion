function isPalindrome(word) {
  word = word.toLowerCase();
  // We make all words in lowercase for a fair comparison
  let wordreversed = word.split("").reverse().join("");
  // console.log("this is the word before reverse " + word);
  // console.log("this is the word after reverse " + wordreversed);
  return word === wordreversed;
}

console.log("gag ==>" + isPalindrome("gag"));
console.log("kayak ==>" + isPalindrome("kayak"));
console.log("php ==>" + isPalindrome("php"));
console.log("radar ==>" + isPalindrome("radar"));
console.log("test ==>" + isPalindrome("test"));
console.log("beveky ==>" + isPalindrome("beveky"));
console.log("good ==>" + isPalindrome("good"));
console.log(" ' ' ==>" + isPalindrome(" "));
console.log("g ==>" + isPalindrome("g"));
