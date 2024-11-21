function sum(a) {
    let currentSum = a;

    function innerSum(b) {
        if (b === undefined) return currentSum;
        currentSum += b;
        return innerSum;
    }

    innerSum.toString = () => currentSum;
    return innerSum;
}


console.log(sum(1)(2)(3)(4)(5)()); 
console.log(sum(3)(7)());        
