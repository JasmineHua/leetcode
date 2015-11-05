/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num=0;
    var number;
    for(var i=0;i<s.length;i++){
        number=s[i].charCodeAt()-64;
        num=num+Math.pow(26,s.length-i-1)*number;
    }
    return num;
};