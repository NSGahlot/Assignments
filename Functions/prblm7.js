function addition(a, b)
{
    var sum = a+b;
    return sum;
}

function square(a)
{
    var sq = a*a;
    return sq;
}

function printVariable(n)
{
    console.log(n);
}

var x = addition(20, 30);
var y = square(x);

printVariable(y);