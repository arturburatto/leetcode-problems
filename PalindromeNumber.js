/* Description:
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/



var isPalindrome = function(x) {
    var reverse = [];
    var num = String(x);
    var array = num.split('').map(Number);    
    for(let i = array.length - 1; i>= 0; i--) {
        reverse.push(array[i]);        
    }        
    if(reverse.join('') == num) {
        return true;
    } else {                
        return false;        
    }
};  