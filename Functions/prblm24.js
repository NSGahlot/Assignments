const input = "Test";
function stringSwap(t)
{
     var x = "abcdefghijklmnopqrstuvwxyz";
     var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var bag = "";
     for(var i=0; i<input.length; i++)
     {
        for(var j=0; j<x.length; j++)
        {
            if(input[i] === y[j])
            {
                bag += x[j];
                
            }
            else if(input[i] === x[j])
            {
                bag +=y[j];
            }
        }
        
     }
     return bag ;
}

console.log(stringSwap(input));