function bubbleSort(nums = [], comp){
    for(var i=0; i<nums.length - 1; i++){
    for(var j=i+1; j<nums.length; j++){
      if(comp(nums[i], nums[j])> 0){
       [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  
  return nums;
  }
  console.log(bubbleSort([10, 3, 5, 6, 20],(a,b)=>a-b));//[3,5,6,10,20]
  console.log(bubbleSort([10, 3, 5, 6, 20],(a,b)=>b-a));//[20,10,6,5,3]
  
  
  
  