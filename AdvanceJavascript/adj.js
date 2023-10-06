let arr = [];


function Product(n,p,b){
    
    this.name = n
    this.price = p, this.brand = b
}

function storeProduct(e){
e.preventDefault(); 
console.log("inside a function");

let form = document.getElementById("products")

let name = form.name.value;
console.log(name);
let price = form.price.value;
console.log(price);
let brand = form.brand.value;
console.log(brand);

let p1 = new Product(name, price, brand);

arr.push(p1);
// console.log("arr:", arr);
}

// console.log("hello world");
