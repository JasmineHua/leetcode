/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var major,flag;
    nums.sort();
    for (var i in nums)
      if (nums[i]===major){
          flag++;
          if (flag>nums.length/2) return major;
      }
      else{
          major = nums[i];
          flag = 1; 
      }
    return major;
};