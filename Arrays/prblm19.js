//print the Second half of the array i.e odd array
// If we don't know the array is even or odd
// Here We are printing the second half of array o/p --> [e,f,g,h]

var names = ["A", "B", "C", "D", "E","F", "G", "H",];
var start;
// EVEN
if(names.length % 2 == 0)
{
    start = names.length/2;
}

//ODD
 else 
 {
    /*start = (names.length-1)/2*/  start = Math.floor(names.length/2);
 }

 for(var i=start; i<names.length; i++)
 {
    console.log(names[i]); 
 }


// If my array is (ODD) then we will apply this rule
// ODD array formula = (numbers.length-1)/2;
// Here we 8 elements and we have to find odd elements
// so we will use the formula of odd array 




/* Imp Concept
1. Math.ceil --> Sky (ceil);
   let's take an example if Math.ceil(3.5) sp output will be --> (4) b/c from (3.5) we need to go up to the sky so it will
   give us ans (4);


2. Math.floor --> ground (floor);
   let's take an example if Math.floor(3.5) so output will be --> (3) b/c from (3.5) we need to go down so it will take us 
   to floor site so ans will be (3);*/