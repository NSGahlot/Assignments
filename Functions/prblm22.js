// Write a function to convert a character to lower case
// use this function to convert a given word to lower case
// use that function to convert an array of strings to array of lower case strings
const input = ["MA", "SA", "I", "SCH", "OOL"]

function toLowerCase(a)
{
        var y = "abcdefghijklmnopqrstuvwxyz";
        var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var ar = [];

        for(var i=0; i<a.length; i++) // outer loop for ["MA", "SA", "I", "SCH", "OOL"]
        {
            var bag = "" 
            var item = a[i]    // "MA"
            for(var j=0; j<item.length; j++)      // inner loop for ["MA"] , ["SA"], ["I"], ["SCH"], ["OOL"]
            {
                for(var k=0; k<x.length; k++)     // Comparison loop for (upper case)
                {
                    if(item[j] === x[k])
                    {
                        bag += y[k]
                        break;
                    }
                }
            }
            ar.push(bag);
            bag = "";
            
        }
        return ar;
}

console.log(toLowerCase(input));