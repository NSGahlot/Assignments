var str = "The quick brown fox";
var output = [];
var bag = ""; // here we are giving empty bag so that it can add all the string values into bag and push into output[] 

for(var i=0; i<str.length; i++)
{
    if(str[i] != " ")
    {
        bag += str[i];
    }
    else
    {
        output.push(bag);
        bag = "";  // because we have to empty the bag also so that it can add more element
    }
}

output.push(bag);     // b/c bag contains fox but without space it is not going into else condition 
console.log(output);