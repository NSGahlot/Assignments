// Given array, count total characters

var names = ["Nrupul", "Aman", "Yogesh", "Venu"];
var sum = 0;
for(var i=0; i<names.length; i++)
{
    //console.log(names[i].length);
    
    sum += names[i].length;  // sum = 0 + 6 ; i++ 
}
 console.log(sum);

