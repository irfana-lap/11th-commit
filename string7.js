let sentence = "JavaScript is amazing";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'a' || sentence[i] === 'A') {
    count++;
  }
}

console.log(count);