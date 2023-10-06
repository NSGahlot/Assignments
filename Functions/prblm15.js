function checkSmallCase(char)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0; i<lower.length; i++)
    {
         if(char == lower[i])
         {
            return true;
         }
    }
     
    return false;
}

var x = checkSmallCase("a");
if(x == true)
{
    console.log("Small Case");
}
else
{
    console.log("Upper Case");
}