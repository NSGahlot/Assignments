// This is ODD array but when the array is long we will not count rather than we will use {IF ELSE condition} so that we can get the 
// desire output.

// Here we are printing the first half of the arrays o/p [a.b.c.d]

var names = ["A", "B", "C", "D","E","F", "G", "H","I"];
var end;
 // EVEN
  if(names.length % 2 == 0)
  {
    end = names.length/2;
  }

  // ODD
   else
   {
    end = Math.floor(names.length/2);
   } 

   // Now printing the first half of array using for loop;

   for(var i=0; i<end; i++)
   {
       console.log(names[i]);
   }
