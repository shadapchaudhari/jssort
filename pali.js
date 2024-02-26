let str = "parth"; // Change this to test different strings

let isPalindrome = true;

for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;  // Exit the loop if a mismatch is found
    }
}

if (isPalindrome) {
    console.log(`${str} is a palindrome.`);
} else {
    console.log(`${str} is not a palindrome.`);
}
