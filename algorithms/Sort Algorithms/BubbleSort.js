function BubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i = 0; i <= arr.length; i++){
            if(arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = true
            }
        }
    }
    while(swapped){

    }
}
const arr = [8, 20, -2, 4, -6]//[ -6, -2, 4, 8, 20 ]
BubbleSort(arr)
console.log(arr)

//Big-O = O(n^2)