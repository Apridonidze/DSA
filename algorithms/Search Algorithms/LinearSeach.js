function LinearSearch(arr, target){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
};
console.log(LinearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(LinearSearch([-5, 2, 10, 4, 6], 6)) // 4 
console.log(LinearSearch([-5, 2, 10, 4, 6], 20)) // -1

//Big-O = O(n)