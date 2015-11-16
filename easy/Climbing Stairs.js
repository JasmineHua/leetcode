/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1||n===2||n===0) return n;
    var a=1,b=2,c;
    for(var i=3;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return c;
};