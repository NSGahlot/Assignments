// Given an array of names of students. Count the names which contain "A"?

var names = ["Amit", "Nrupul", "Manideep", "Yogesh", "Anant"];
var count = 0;

for(var i=0; i<names.length; i++)
{
    var x = names[i];             // Here x="Amit" and x.length = 4
    for(var k=0; k<x.length; k++) // Now value of k=0 and k<x.length i.e k<4 
    
    // Now the loop will check for each letter of Amit and it will run according to that and same goes for every other names. It will check and
    // count that how many names are there which contains "A" or "a". 
    
    {
       if(x[k]=="A" || x[k]=="a")  // x[k] here means x = Amit and k = 0 and it will iterate according to loop.
       {
        count++;
        break;    // break is use for optimization. When we have to find the "A" or "a" no need to count more one's we got any one of them.
                  // for that we are using break here. Break will finish this inner loop and it will go to first loop that is it will go to i++.
       }
    }
    
}
console.log(count);