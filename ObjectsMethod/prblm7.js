var amazon = [
    {brand : "Sony", price : "5000", rating : 3},
    {brand : "HP", price : "7000", rating : 4},
    {brand : "Lenovo", price : "2000", rating : 2},
    {brand : "Dell", price : "1000", rating : 1},
    {brand : "AlienWare", price : "15000", rating : 5}
];

// for(var i=0; i<amazon.length; i++)
// {
//     if(amazon[i].rating >= 3)
//     {
//         console.log(amazon[i])
//     }
// }

for(var i=0; i<amazon.length; i++)
{
    if(amazon[i].price >=5000 && amazon[i].price<=15000)
    {
        console.log(amazon[i]);
    }
}