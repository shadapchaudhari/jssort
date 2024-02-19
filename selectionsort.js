let arr = [10, 2, 7, 0, -1, 15, 3];
{
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}