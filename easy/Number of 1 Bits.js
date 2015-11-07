/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
     var flag = 0;

        while(n!==0)
        {
            n = n&(n - 1);
            flag++;
        }

        return flag;
};