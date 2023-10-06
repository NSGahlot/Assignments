var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var rows = arr.length;
var cols = arr[0].length;

for(var i=0; i<rows; i++)
{
    var bag = [];

    for(var j=0; j<rows; j++)
    {
        bag = bag + arr[j][i] + " ";
    }
    console.log(bag);
}
