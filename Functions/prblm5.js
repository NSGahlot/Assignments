// return 
function mummy_ans(x, y) // This function will not run till the time we are not calling it.
{
    var sum = x + y;
    return sum;         // Here program will end and 30 will go to result by replacing mummy_ans(10,20);
}

var result = mummy_ans(10,20);  // this value will go to receiver 
console.log(result);