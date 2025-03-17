// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

function alternatingCaps(sentence) {
  let words = sentence.split(" ");
  let mixedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i % 2 === 0) {
      mixedWords.push(word.toLowerCase());
    } else {
      mixedWords.push(word.toUpperCase());
    }
  }
  return mixedWords.join(" ");
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
