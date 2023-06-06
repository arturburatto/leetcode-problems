
// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.


var canMakeArithmeticProgression = function(arr) {
    var newArr = arr.sort((a, b) => a- b)
    var diff = newArr[1] - newArr[0]
     for(let i = 1; i < newArr.length - 1; i++){
      if(newArr[i + 1] - newArr[i] !== diff) {
          return false
        } 
    }
  return true
};