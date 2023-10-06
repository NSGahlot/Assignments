// 2 way

function checkPrime(number)
{
    var factors = 0;
    for(var i=1; i<=number; i++)
    {
        if(number%i==0)
        {
            factors++;
        }
    }
    if(factors==2)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
 
var x = checkPrime(19);

if(x==true)
{
    console.log("Prime");
}
else
{
    console.log("Not Prime");
}