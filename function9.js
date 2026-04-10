function processSentence(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .filter(word => word.length > 4);
}

let sentence = "JavaScript is a very powerful programming language";
console.log(processSentence(sentence));