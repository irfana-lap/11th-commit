function checkSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum > 100) {
    return "High";
  } else {
    return "Low";
  }
}

let numbers = [20, 30, 40, 50];
console.log(checkSum(numbers));