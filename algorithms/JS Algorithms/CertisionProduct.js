function certisionProduct(arr1,arr2){
    const result = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
        result.push([arr1[i], arr2[j]])
        }    
    }
    return result
}
const arr1 = [1,2]
const arr2 = [3,4]
console.log(certisionProduct(arr1,arr2))//[ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]

//Big-O = O(mn)