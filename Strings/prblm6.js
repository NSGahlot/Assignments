// Given an array of names of students. Count the names which start from A

var names = ["Amit", "Nrupul", "Manideep", "Yogesh", "Anant"];
var count = 0;
for(var i=0; i<names.length; i++)
{
    var x = names[i];
    if(x[0]=="A" || x[0]=="a")
    {
         count++;
    }
}
console.log(count);