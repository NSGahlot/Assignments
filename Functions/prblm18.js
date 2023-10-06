function differenceTwoNumbers(a,b)
{
        var diff = a - b;
        var differ = absoluteValue(diff);
        return differ;
    }

    function absoluteValue(diff)
    {
        if(diff<0)
        {
        
            return diff*-1;
        }
        else{
            return diff;
        }
}

var x = differenceTwoNumbers(2,18);
console.log(x);

// function differenceTwoNumbers(a,b)
// {
//     var diff = a - b;
//     return diff;
// }

// function absoluteValue(diff)
// {
//     if(diff<0){
       
//         return diff*-1;
//     }
//     else{
//         return diff;
//     }
// }
//  x = differenceTwoNumbers(2,18);
//  console.log(x);
//  l = absoluteValue(x)
// console.log(l);

