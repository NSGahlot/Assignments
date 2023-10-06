function convertUpperToLower(x)
{
     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var lower = "abcdefghijklmnopqrstuvwxyz";

     for(var i=0; i<upper.length; i++)
     {
        if(upper[i] == x)
        {
            return lower[i]
        }
     }
}

function convertWordToLower(word)
{
     var bag = "";
     for(var i=0; i<word.length; i++)
     {
        //console.log(word[i]);
        bag = bag + convertUpperToLower(word[i]);
        
     }
     return bag;
}

console.log(convertWordToLower("NARENDRA"));

