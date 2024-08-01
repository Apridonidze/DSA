function InsertionSort(arr){
    for(let i = 1; i <= arr.length; i++){
            let insertNum = arr[i];
            let j = i - 1;
            while(j >= 0 && arr[j] > insertNum){
                arr[j + 1] = arr[j];
                j = j - 1;
            };
            arr[j + 1] = insertNum;
    }
};
const arr = [-6, 20, 8, -2, 4];
InsertionSort(arr);
console.log(arr);