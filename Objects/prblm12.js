var naam = "Narendra";

var details = {};

for(var i=0; i<naam.length; i++)
{
    var char = naam[i];

    if(details[char] == undefined)
    {
        details[char] = 1
    }

    else
    {
          details[char] += 1;
    }
}

console.log(details);