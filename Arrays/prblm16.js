// Print the last three item of a product

var products = ["Earphone", "Headphone", "Mic", "Pc", "Cellphone", "Laptop"];
for(var i=3; i<products.length; i++)
{
     console.log(products[i]);
}

console.log("-----2 Way-----")

var start = products.length - 3;
for(var i = start; i<products.length; i++)
{
    console.log(products[i]); 
}
