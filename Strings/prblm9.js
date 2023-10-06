var tagline = "";
var spaces = 0;

if(tagline.length>0)
{
    for(var i = 0; i<tagline.length; i++)
{
    if(tagline[i]==" ")
    {
        spaces++;
    }
}

    var words = spaces + 1;
    console.log("Words", words);
}

else
{
    console.log("Words", 0);
}