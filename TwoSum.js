
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.



var twoSum = function(nums, target) {
    let ind = []
    for(let i = 0; i < nums.length - 1 ; i++) {
        for(let j = i + 1; j< nums.length; j++){
            var soma = nums[i] + nums[j]
            if(soma === target){
                ind.push(i)
                ind.push(j)                
            }
            
        }
        
    }
    return ind; 
};


