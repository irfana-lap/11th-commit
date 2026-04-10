function processNumbers(arr) {
  return arr
    .map(num => num + 10)
    .filter(num => num > 30);
}

let numbers = [5, 15, 20, 25, 30];
console.log(processNumbers(numbers));