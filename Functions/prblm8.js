function square_number(x)
{
    var sq = x*x;
    return sq;
}

function multiply10(y)
{
    var mult = result1*10;
    return mult;
}

function printVariable(z)
{
    console.log(z);
}

var result1 = square_number(20);
var result2 = multiply10(result1);

printVariable(result2);

// diffrence b/w return and console.log
// return --> Give back value.
// console.log --> print given value.