var arr = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L']

];

var rows = arr.length;
var columns = arr[0].length;

for(var father=0; father<=rows-1; father++)
{
   var output = "";

   for(var son=columns-1; son>=0; son--)
   {
    output = output + arr[father][son] + " "
 }

   console.log(output);
}
//console.log(output);