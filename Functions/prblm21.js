//write code to calculate the average of an array
// if there are no items in the array it should return 0
// Note: Create a function to find the sum of elements in an array and use that function to find out the average.

function array_Sum(n)
{
    if(n.length===0)
    {
        return 0;
    } 
    var sum = 0;
     for(var i=0; i<n.length; i++)
     {
        sum = sum + n[i];
     }
     return sum;
}

function array_average(a)
{
    console.log(a);
}

var x = array_Sum([1,2,3,4,5]);
var y = x/5;
array_average(y);