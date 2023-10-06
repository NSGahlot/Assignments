// Updating the movies

var movies = [];

movies.push("Thor","Ant Man", "Iron Man", "Avenger", "End Game", "RRR");
movies.push("Bahuballi");
movies[2] = "The Raid";     // here we are updating the movies. 
for(var i=0; i<movies.length; i++)
{
    console.log(movies[i]);
}