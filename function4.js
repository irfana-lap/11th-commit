function findLargest(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let numbers = [10, 25, 5, 60, 30];
console.log(findLargest(numbers));