    var array = [15,25,9,6,78];                             
    for(var i=0; i<array.length; i++)
    {
        for(var j=i+1; j<array.length; j++)
        {
            if(array[i]>array[j])
            {
                var temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
        console.log(array[i]);
    }
    var k = 5;
    console.log("forth smallest number " + array[k-1]);

    var t = 2;
    console.log("second largest number " + array[array.length - t]);


    
