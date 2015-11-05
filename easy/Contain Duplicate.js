/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var i,j;
    var flag=0;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                flag=1;
            }
        }
    }
    if(flag===1) return true;
    else return false;
    
};