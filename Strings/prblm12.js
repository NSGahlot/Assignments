// Check vowel count how many vowels are there in str?
 
var str = "jhsdku";
var vowel = "aeiou"
var count = 0;
for(var i=0; i<vowel.length; i++)
{
    var chk = vowel[i];
    for(var j=0; j<str.length; j++)
    {
        if(chk == str[j])
        {
            count++;
        }
    }

}

if(count>0)
{
    console.log(true);
}
else
{
    console.log(false);
}