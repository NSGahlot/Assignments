// Check whether a number is prime or not

function checkPrime(number)
{
    
    var factors = 0;                   // Because prime no. has only 2 factors 1 and itself
    
    for(var i=1; i<=number; i++)
    {
        if(number%i == 0)
        {
            factors++;
        }
    }
    
    if(factors == 2)
    {
        console.log("Prime");
    }
    else
    {
        console.log("Not Prime");
    }
}
checkPrime(19);
checkPrime(20);
checkPrime(190);
