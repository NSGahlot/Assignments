// How to update the string

var name1 = "Masai";
var name2 = [];
for(var i=0; i<name1.length; i++)
{
    var x = name1[i]
    console.log(x);

//  Here we are converting array into string b/c string is immutable we cannot chng string. In string there is not push() function.
    name2.push(x); // Here i have put everything in name2 by using push() function 
}
name2[2] = "t";
console.log(name2); // Now i don't want my output in this way['M', 'a', 't', 'a', 'i'], I want my output in this way [Matai].

var jhola = "";                  // Here we are converting array into string so thst we can get our desired output. 
for(var i=0; i<name2.length; i++)
{
    jhola+= name2[i];
}
console.log(jhola);