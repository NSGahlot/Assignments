//Move all negative elements to end

var arr = [1, -1, 3, 2, -7, -5, 11, 6];
var arr1 = [];
var arr2 = [];

for(var i=0; i<arr.length; i++)
{
     if(arr[i]>0)
     {
        arr1.push(arr[i]);
     }
     else if(arr[i]<0)
     {
        arr2.push(arr[i]);
     }
     
     
}
 var arr3 = arr1 + arr2;
 console.log(arr3);


