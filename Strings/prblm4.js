// Remove a character

var name1 = "Masai";
var jhola = "";

for(var i=0; i<name1.length; i++)
{
    if(i==2)
    {
        continue;
    }

    else
    {
        jhola = jhola + name1[i];
    }
}
console.log(jhola);

//Another way to solve this prblm. 