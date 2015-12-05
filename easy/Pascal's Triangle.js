/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var nums=new Array();
    for(var i=0;i<numRows;i++){
        nums[i]=new Array();
        for(var j=0;j<i+1;j++){
            if(j===0||i==j) nums[i][j]=1;
            else nums[i][j]=nums[i-1][j-1]+nums[i-1][j];
        }
    }
    return nums
};