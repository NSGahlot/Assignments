var moveZeroes = function(nums) {
    var temp = [];
    for(var i=0; i<nums.length; i++)
    {
        if(nums[i] != 0)
        {
            temp.push(nums[i]);
        }
    }
    var n = temp.length
    for(var i=0; i<n; i++){
        nums[i] = temp[i];
    }

    for(i=n; i<nums.length; i++)
    {
        nums[i] = 0
    }
    
return nums;

    
};