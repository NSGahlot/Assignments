//Kth smallest element

var arr = [7, 10, 4, 3, 20, 15];
var tmp =[]
//var x = arr.length;

for(var i=0; i<arr.length; i++)
{
    for(var j=i+1; j<arr.length; j++)
    {
        if(arr[i]>arr[j])
        {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    tmp.push(arr[i]);

}
console.log(tmp);
console.log("3 smallest array is", tmp[2]);





