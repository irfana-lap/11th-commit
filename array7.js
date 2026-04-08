let numbers = [45, 80, 120, 150, 90];
let firstOver100 = null;

for (let num of numbers) {
    if (num > 100) {
        firstOver100 = num;
        break;  
    }
}

console.log(firstOver100);