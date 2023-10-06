function maxConsecutiveNumber(arr)
{
     var count = 0;
     var maxCount = 0;

     for(var i=0; i<arr.length; i++)
     {
        if(arr[i]===1)
        {
            count++;
        if(count>maxCount)
        {
            maxCount = count;
        }
        }

        else{
            count = 0;
        }
     }
     console.log(maxCount);
}

maxConsecutiveNumber([1,1,0,1,1,1])

