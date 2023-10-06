// How to find last element in Array?

var veggie = ["Lemon", "Potato", "Tomato","Carrot", "Beans"];
// console.log(veggie[2]);// Not a Generic code. Now we are adding Carrot in array.
// Generic code --> Work for all cases.
var last_index = (veggie.length-1);    // Here o/p will come undefined b/c last index of array is 3 so we need to use (-1).
console.log(veggie[last_index]);       // Now it will show the last vegetable i.e carrot.

// Now let's take an example by adding one more vegetable then the output will change

console.log(veggie[last_index]);
// Now this is "Generic code".