/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var flag;
    var n=0;
    for(var i in nums){
        if(nums[i]!==flag){
            flag=nums[i];
            nums[n]=nums[i];
            n++;
        }
    }
    return n;
};