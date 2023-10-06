// functions --> control your code

function mummy_ans()
{
    var a = 5;
    var b = 3;
    var sum = a+b;
    console.log("Beta Sum is", sum);
}

mummy_ans();   // Here we are calling the function so that we can get our answer.

 //Now add 2 more calling functions ex.
mummy_ans(); 
mummy_ans(); // Now the output will come 3 times b/c we are calling functions 3 times.

function papa_ans()
{
     var a = 6;
     var b = 4;
     var sub = a-b;
     console.log("Beta Difference is", sub);
}

papa_ans();
mummy_ans(); 