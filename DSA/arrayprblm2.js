// Find minimum and maximum element in an array

function array_Max_Min(n)
{
    var max = -Infinity;
    var min = Infinity;
    for(var i=0; i<n.length; i++)
    {
        if(max<n[i])
        {
            max = n[i];
        }
        else if(min>n[i])
        {
            min = n[i];
        }
    }
    console.log(max, min);
}

array_Max_Min([3, 2, 1, 56, 10000, 167]);

