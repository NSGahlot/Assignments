// if we have only 2 products so how can we give 3 products 
// Code2 with different situation 

var products = ["Earphone", "Headphone", /*"Mic", "Pc", "Cellphone", "Laptop"*/];
var start = 0;

if(products>=3)
{
    start = products.length-3;
}

for(var i = start; i<products.length; i++)
{
     console.log(products[i]);
}