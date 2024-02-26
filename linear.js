let arr = [19, 20, 43, 59, 65];
let target = 59;

let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log(`Element ${target} found at index ${i}`);
        found = true;
        break;  // Exit the loop once the target is found
    }
}

if (!found) {
    console.log(`Element ${target} not found in the array`);
}
