var array = [10,20,30,40,50];
var maxi = -Infinity;
for(var i=0; i<array.length; i++)
{
    if(array[i]>maxi)
    {
        maxi = array[i];
    }
}
console.log(maxi);

var array = [10,20,30,40,50];
var min_array = Infinity;
for(var i=0; i<array.length; i++)
{
    if(array[i]<min_array)
    {
        min_array = array[i];
    }
}
console.log(min_array);
