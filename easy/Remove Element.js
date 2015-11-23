/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count=0;  
    for(var i=0; i<nums.length; i++)  
    {  
        if(nums[i]===val) count++;  
        else if (count>0)  
        {  
            nums[i-count] = nums[i];  
        }  
    }  
    return nums.length-count;    
};