// In previous prblm we are first converting string into array and again we are converting array into string.
// "Masai" --> ["M", "A", "S", "A", "I"] --> ["M", "A", "T", "A", "I"] --> "Matai"
// Now what we want is "Masai" --> "Matai"

var name1 = "Masai";
var jhola = ""; // I cannot chng name1 so that's why we are using another (variable jhola) b/c string is immutable.

for(var i=0; i<name1.length; i++)
{
    if(i==2) // Here we want to chng 's' with 't' i.e why have use  the if condition.
    {
        jhola = jhola + "t";
    }
    else
    {
        jhola = jhola + name1[i];
    }
}

console.log(jhola); // I cannot chng name1 so that's why we are using another (variable jhola) b/c string is immutable.

// Now we will check what is the value of name1
console.log(name1); // o/p Masai b/c we cannot chng string.