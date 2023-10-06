function convertUpperToLower(x)
{
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";

    for(var i=0; i<upper.length; i++)
    {
        if(upper[i] === x)
        {
            return lower[i];
        }
    }
}

function convertWordTolower(word)
{
   var bag = "";
   for(var i=0; i<word.length; i++)
   {
    bag = bag + convertUpperToLower(word[i]);
   }
   return bag;
}

function convertArrayOfWord(arr)
{
   var output2 = [];
   for(var i=0; i<arr.length; i++)
   {
    output2.push(convertWordTolower(arr[i]));
   }

   return output2;
}

var arr = ["MA", "SA", "I", "SCH", "OOL"]
console.log(convertArrayOfWord(arr));