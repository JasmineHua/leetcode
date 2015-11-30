/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len=digits.length;
    var flag=0;
    for(var i in digits){
        if(digits[i]!==9) flag=1
    }
    if(flag===1){
        while(digits[len-1]!==null){
            if(digits[len-1]<9){
                digits[len-1]++;
                return digits
            }
            else{
                digits[len-1]=0;
                len--;
            }
        }
    }
    else{
        digits[0]=1;
        for(i=1;i<=len;i++){
            digits[i]=0;
        }
        return digits;
    }
};