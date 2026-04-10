function getLargestEven(arr) {
  let evenNumbers = arr.filter(num => num % 2 === 0);

  let max = evenNumbers[0];

  for (let i = 1; i < evenNumbers.length; i++) {
    if (evenNumbers[i] > max) {
      max = evenNumbers[i];
    }
  }

  return max;
}

let numbers = [10, 25, 8, 60, 33, 42, 7];
console.log(getLargestEven(numbers));