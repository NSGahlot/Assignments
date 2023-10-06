// Another way to solve previous prblm.

var name1 = "Masais"; // Here we are adding one more s, so now we will use new condition
var jhola = "";

for(var i=0; i<name1.length; i++)
{
    if(name1[i]=="s" && i==2) // And now it will not delete another "s";
    {
        continue;
    }

    else
    {
        jhola = jhola + name1[i];
    }
}
console.log(jhola);