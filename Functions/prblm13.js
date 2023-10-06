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

for(var i=2; i<=100; i++)
{
    var x = checkPrime(i);

if(x==true)
{
    console.log(i, "Prime");
}

}
 
