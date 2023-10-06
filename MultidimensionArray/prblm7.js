var num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var rows = num.length;
var cols = num[0].length;

for(var i=0; i<rows; i++)
{
    var output = [];
    for(var j=0; j<cols; j++)
    {
        output = output + (num[j][i]) + " ";
    }
    console.log(output);
}