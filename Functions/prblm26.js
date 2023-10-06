function sumOfArray(arr)
{
   var sum = 0;
   for(var i=0; i<arr.length; i++)
   {
    sum = sum + arr[i];
   }
   return sum;
}

function findAverage(arr)
{
    if(arr.length === 0)
    {
        return 0;
    }

    else
    {
        var sum = sumOfArray(arr);

        var avg = sum/arr.length;
        return avg;
    }
}

var arr = [2, 1, 6, 3];
var result = findAverage(arr);

console.log(result);