// Given a character in lower case, print the upper case character

var char = "a";
var lower_case = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper_case = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

for(var i=0; i<lower_case.length; i++)
{
    if(char==lower_case[i])
    {
        break;
    }
}
console.log(upper_case[i]);