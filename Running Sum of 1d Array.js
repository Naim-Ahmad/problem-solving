var runningSum = function(nums) {
    let arr = []
    nums.reduce((prevValue, currentValue)=> arr.push(prevValue + currentValue),0)
    return arr
};

console.log(runningSum([1,2,3,4]))
