function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let leftArr = []
    let rightArr = []
    let pivot = arr[arr.length - 1]

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else {
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr)) //[-6, -2, 4, 8, 20]


//Worst case - O(n^2)
// Avg case - O(nlogn)