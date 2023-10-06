//write code to calculate the average of an array
// if there are no items in the array it should return 0
// Note: Create a function to find the sum of elements in an array and use that function to find out the average

// Suggested Way

function array_Sum(n){
if(!n.length)
{
    return 0;
}
{
     var sum = 0;
     for(var i=0; i<n.length; i++)
     {
        sum = sum + n[i];
     }
     return sum;
}
}

function array_average(items)
{
    var aver = array_Sum(items);
    var b = aver/5;
    console.log(b);
}


array_average([2,4,6,8,10]);
