// const student = {
//     unit: 3,
//     batch: "web17",
//     instructor: "sk",
// }

// const s1 = Object.create(student);
// s1.name = "shanu" 
// const s2 = Object.create(student);
// const s3 = Object.create(student);
// const s4 = Object.create(student);

// function student(n, u){
//     this.name = n,
//     this.unit = u
// }

// student.prototype.bio = function () {
//     console.log(`hello from ${this.name}`);
// };

// let s1 = new student("shanu", 3)

// s1.bio(); 

// function shoes(b,p){
//     this.brand = b,
//     this.seller = "flipkart",
//     this.price = p
// }

// shoes.prototype.coupon = function(){
//     console.log("20% discount on this products");
// }
// let s1 = new shoes("nike", 3000);
// // console.log("s1:", s1);

// s1.coupon();

// Array Constructor function
// let a1 = new Array("x", "y", "z");
// console.log("a1:", a1);


// arguments object
function myArray(){
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false,
    });

    this.length = arguments.length;

    for(let i=0; i<this.length; i++){
        this[i] = arguments[i];
    }
}

let a2 = new myArray("x", "y", "z");
// console.log("a2:", a2);

console.log("a2:", Object.values(a2));



