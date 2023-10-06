function runningSum(arr)
{
  var sum = 0;
  var ans = "";
  for(var i=0; i<arr.length; i++)
  {
    sum = sum + arr[i];
    ans = ans + sum + " ";
  }
  console.log(ans);
}
runningSum([1,2,3,4,5]);