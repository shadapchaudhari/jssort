let number = 12345; // Change this to test different numbers

let reversedNumber = 0;

while (number > 0) {
    reversedNumber = reversedNumber * 10 + number % 10;
    number = Math.floor(number / 10);
}

console.log(`Original number: ${number}`);
console.log(`Reversed number: ${reversedNumber}`);
