function ClimbingStaircase(n){
    const noOfWays = [1,2]
    for(let i = 2; i <= n; i++){
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1]
}

console.log(ClimbingStaircase(1))//1
console.log(ClimbingStaircase(2))//2
console.log(ClimbingStaircase(3))//3
console.log(ClimbingStaircase(4))//5
console.log(ClimbingStaircase(5))//8



//Big-O = O(n)