function maxWealth(arr)
{
    var max = 0;
    
    for(var i=0; i<arr.length; i++)
    {
        var row = 0; 
        for(var j=0; j<arr[i].length; j++)
        {
            row = row + arr[i][j];
        }
        if(row>max)
        {
            max = row;
        }
    
    }
    return max;
}


var x = maxWealth([[1,5],[7,3],[3,5]])
console.log(x);

