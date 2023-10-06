function father_ans(x, y) // Here Sender is sending only 2 values that's why we have only 2 paramters. if we are getting 3 values from 
                          // sender so paramter will become 3.
{
    var multi = x*y;
    console.log("Beta Multiplication is", multi);
}

function brother_ans(x, y)
{
    var div = x/y;
    console.log("Bhai Divison is", div);
}

father_ans(4,5); // Here ordering is very important 4 will go to x and 5 will go to y.
father_ans(8,5);
father_ans(6,5);
brother_ans(10,2);
brother_ans(20,2);
brother_ans(30,2);