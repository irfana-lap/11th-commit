function processNumbers(arr) {
  return arr
    .filter(num => num > 50)
    .map(num => num * 2);
}

let numbers = [10, 55, 60, 30, 80, 40];
console.log(processNumbers(numbers));