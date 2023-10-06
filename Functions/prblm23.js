
const input = ["MA", "SA", "I", "SCH", "OOL"]

function toLowerCase(a)
    {
        var y = "abcdefghijklmnopqrstuvwxyz";
        var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var ar = [];

        for(var i=0; i<a.length; i++) 
        {
            var bag = "" 
            var item = a[i] // "MA"
            for(var j=0; j<item.length; j++)
            {
                var k = 0;
                while(k<x.length)
                {
                    if(item[j] === x[k])
                    {
                        bag += y[k];
                        break;
                    }

                    k++;
                }
            }
                ar.push(bag);
                bag = "";
 

        } 
        return ar;

}

console.log(toLowerCase(input));
