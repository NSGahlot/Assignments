var arr = [12, 35, 1, 10, 34, 2];
var smallest = arr[0];
var sSmallest = Infinity;

for(var i=1; i<arr.length; i++)
{
  if(arr[i]<smallest){
    sSmallest = smallest;
    smallest = arr[i];
  }
  else if(arr[i] != smallest && arr[i]<sSmallest)
  {
    sSmallest = arr[i];
  }
}

console.log(smallest, sSmallest);