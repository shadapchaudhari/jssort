let number = 121; // Replace with your desired number

let numberString = String(number);
let reversedString = numberString.split('').reverse().join('');

if (numberString === reversedString) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}
