/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num>=10){
        var x=0;
        while(num!==0){
            x=x+num%10;
            num=parseInt(num/10); 
        }
        return addDigits(x);
    }
    return num;
    
};