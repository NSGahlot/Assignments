//o/p R**AJu*

var name1 = "WErtfytdeyt%#@%r34ajU1"; // here name.length = 4  o/p R**AJu*
var bag = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 for(var i=0; i<name1.length; i++)  //i=1
 {
    var char = name1[i];     //r3     // var char = name1[0] --> var char = name1[r] -->  char = "r"
    var milgaya = false;
    for(var j = 0; j<lower.length; j++)
    {
        if(char === lower[j]) // it will check for every character one's it will get r then it will go inside loop body 
                             //  and it will print "R";
        {
            bag = bag + upper[j]; // b/c upper and lower have the same indexes.
            milgaya = true;
              break;
        }
        else if(char === upper[j])
        {
             bag = bag + lower[j];
             milgaya = true;
             break;
        }  
           
    }


    if(milgaya===false){
        bag = bag + "*";
    }

    
 }

 console.log(bag);