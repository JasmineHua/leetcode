/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i=0;
    var j=0;
    while(j<nums.length){
        if(nums[j]!==0){
            nums[i]=nums[j];
            i++;
        }
        j++;
    }
    for(var n=i;n<j;n++) {nums[n]=0;}
};