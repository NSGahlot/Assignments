function slicee (arr, start, end)
{
    if(end == undefined)
    {
        end = arr.length
    }

    var x = [];
   for(var i=start; i<end; i++)
   {
    x.push(arr[i]);
   }
   return x;

}

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
x = slicee(fruits, 1)
console.log(x);