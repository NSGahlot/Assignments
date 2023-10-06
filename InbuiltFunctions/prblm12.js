function fevicol(arr)
{
    var bag = "";
    for(var i=0; i<arr.length; i++)
    {
        bag = bag + arr[i];
    }
    return bag;
}

var arr = ["M", "A", "N"];

console.log(fevicol(arr));