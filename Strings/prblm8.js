// Given a string count the number of words in that string.

var tagline = "A transformation in education";
var spaces = 0;
//var x = tagline.length
//console.log(x);

for(var i = 0; i<tagline.length; i++)
{
    if(tagline[i]==" ")
    {
        spaces++;
    }
}

var words = spaces + 1;
console.log("Words", words);