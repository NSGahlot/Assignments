// Find prime numbers from 2 to 100?

function checkPrime(number)
{
    var factors = 0
    for(var i=1; i<=number; i++)
    {
        if(number%i==0)
        {
            factors++;
        }
    }

    if(factors==2)
    {
        console.log(number, "Prime");
    }
    else
    {
        console.log(number, "Not Prime");
    }
}

for(var i=2; i<=100; i++)
{
    checkPrime(i);
}