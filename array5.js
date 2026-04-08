let numbers = [10, 15, 20, 25, 30, 33];
let evenNumbers = [];

for (let num of numbers) {
    if (num % 2 === 0) {   
        evenNumbers.push(num);
    }
}

console.log(evenNumbers);