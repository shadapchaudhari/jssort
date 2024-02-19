let ar = [ 100 , 95 , 70 , 95 , 35];
{
    for(let i = 0; i < ar.length; i++){
        let j = i;
        while(j > 0 && ar[j] < ar[j - 1]){
            let temp = ar[j];
            ar[j] = ar[j - 1];
            ar[j - 1] = temp;
            j--;
        }
    }
    for(let i = 0; i < ar.length; i++){
        console.log(ar[i]);
    }
}