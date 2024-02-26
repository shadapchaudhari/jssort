let ar = [19, 20, 43, 59, 65];
let target = 59;
let start = 0;
let end = ar.length - 1;
let mid;

while (start <= end) {
    mid = Math.floor((start + end) / 2);  // Corrected line

    if (target == ar[mid]) {
        console.log(mid);
        break;
    } else if (target > ar[mid]) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
