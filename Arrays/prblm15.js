// Skip some movies
// for ex skip Iron Man and RRR

var movies = ["Bahuballi", "Spider Man", "Iron Man", "Pushpa", "RRR"];
for(var i=0; i<movies.length; i++)
{
    if(i==2 || i==4)
    {
        continue;
    }
    console.log(movies[i]);
}

