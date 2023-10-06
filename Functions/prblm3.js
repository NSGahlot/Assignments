// Paramters --> ()

function mummy_ans(x, y, z) // Receiver --> It will give result or information according to the (sender's value). Basically it becomes (Dynamic).
{
    var sum = x + y + z;
    console.log("Beta Sum is", sum);
}
mummy_ans(15,10,16);   // This is Sender  
mummy_ans(20,25,30);   // We can chng the value as many times and receiver will also give result according to that information.
mummy_ans(40,50,60);