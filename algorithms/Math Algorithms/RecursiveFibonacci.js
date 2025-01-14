function RecursiveFibonacci(n){
    if(n < 2){
        return n;
    }
    return RecursiveFibonacci(n - 1) + RecursiveFibonacci(n - 2);
};
console.log(RecursiveFibonacci(0)) // 0 
console.log(RecursiveFibonacci(1)) // 1
console.log(RecursiveFibonacci(6)) // 8


// Big-O = O(n) - Iterative
// Big-O = O(2^n) - Recursive