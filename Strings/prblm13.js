// find the vowel and consonant count

var str = "ankush";
var vowel = "aeiou";
var count = 0;

for(var i=0; i<vowel.length; i++)
{
    var chk = vowel[i];
    for(var j=0; j<str.length; j++)
    {
        if(chk == str[j])
        {
            count++
        }
    }
}

var consonant = str.length - count;
console.log(count,consonant);