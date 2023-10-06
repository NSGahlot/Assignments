// Print the first three movies only
// 1st Way using operator
var movies = ["Bahuballi", "Spider Man", "Iron Man", "Pushpa", "RRR"];
for(i=0; i<movies.length-2; i++)
{
    console.log(movies[i]);
}

// 2nd Way using if condition and break;
console.log("------Using 2 Way------")
var movies = ["Bahuballi", "Spider Man", "Iron Man", "Pushpa", "RRR"];
for(var i=0; i<movies.length; i++)
{
    if(i==3)
    {
        break;
    }
    console.log(movies[i]);
}