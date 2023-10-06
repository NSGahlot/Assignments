// Here we are converting number into string using inbuilt function 
// toString();


var num1 = 12;
var num2 = 14;
var x = num1.toString();

console.log(x, typeof(x));     // o/p 12 string

var y = num2.toString();

console.log(y, typeof(y));    // o/p 14 string


num1 = num1.toString();
num2 = num2.toString();
console.log(num1, num2);      // o/p 12 14
console.log(typeof(num1), typeof(num2)); // o/p string string

