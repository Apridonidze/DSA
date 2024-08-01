function recursiveFacotiral(n){
    if(n === 0){
        return 1;
    }
    return n * recursiveFacotiral(n - 1);
};

console.log(recursiveFacotiral(0)); //1
console.log(recursiveFacotiral(1)); //1
console.log(recursiveFacotiral(5)); //120

//Big-O = O(n)