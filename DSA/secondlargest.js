var arr = [12, 35, 1, 10, 34, 1];
var largest = arr[0];
var sLargest = -Infinity;

for(var i=1; i<arr.length; i++)
{
  if(arr[i]>largest){
    sLargest = largest;
    largest = arr[i];
  }
  else if(arr[i]<largest && arr[i]>sLargest){
    sLargest = arr[i];
  }
}
console.log(largest, sLargest);