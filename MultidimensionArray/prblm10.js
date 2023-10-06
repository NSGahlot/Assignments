var items = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

var rows = items.length;
var cols = items[0].length;

for(var i=0; i<rows; i++)
{
var sum = 0;
for(var j=0; j<rows; j++)
{
sum = sum + items[i][j];
}
console.log(sum);
}

