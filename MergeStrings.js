/*Desciption:
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/


var mergeAlternately = function(word1, word2) {
    var merged = "";
    for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if(i < word1.length) {
            merged = merged + word1[i];
        }
        if(i < word2.length) {
            merged = merged + word2[i];
        }        
    }
    return merged
    };