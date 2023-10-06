// Lower case to upper case

var name1 = "r34ajU1"; // here name.length = 4  o/p R**AJu*
var bag = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


for(var i=0; i<name1.length; i++)
{
    var char = name1[i];          // var char = name1[0] --> var char = name1[r] -->  char = "r"
    for(var j = 0; j<lower.length; j++)
    {
        if(char == lower[j]) // it will check for every character one's it will get r then it will go inside loop body and it will print "R";
        {
            bag = bag + upper[j]; // b/c upper and lower have the same indexes.
            //break;
        }
    }
}

console.log(bag);