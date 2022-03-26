function solution(inputArray) {
    if(inputArray < 2) return false
    let a = inputArray[0], b = inputArray[1];
    let c
    for (let i = 0; i < inputArray.length;  i++){
        c = inputArray[i] * inputArray[i + 1]
        if(c > a*b){
            a = inputArray[i], b = inputArray[i + 1]
        }
    }
    console.log(a * b)
    // for (let i=0; i<inputArray.length; i++)
    // for (let j=i+1; j<inputArray.length; j++)
    //     if (inputArray[i]*inputArray[j] > a*b)
    //         a = inputArray[i], b = inputArray[j];
    //         console.log({ a, b})
    
    // console.log(a*b)
}

solution([5, 6, -4, 2, 3, 2, -23])

// def adjacentElementsProduct(inputArray):

// m=inputArray[0]*inputArray[1]

// for i in range(1,len(inputArray)-1):

// n=inputArray[i]*inputArray[i+1]

// if(n>m):

// m=n

// return m