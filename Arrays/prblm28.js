    var array = [15,25,9,6,78];                             
    var min_array = Infinity;
    for(var i=0; i<array.length; i++)
    {
        if(array[i]<min_array)
        {
            min_array = array[i];
        }
    }
    console.log(min_array); // 78,25,15,9,6

    var array = [15,25,9,6,78];
    var max_array = -Infinity;
    for(var i=0; i<array.length; i++)
    {
        if(array[i]>max_array)
        {
            max_array = array[i];
        }
    }
    console.log(max_array);









