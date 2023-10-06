function isOdd(n)
{
    for(var i=1; i<=n; i++)
    {
        if(n%2 === 0)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
}

for(var i=0; i<=100; i++)
{
    var x = isOdd(i);
    if(x === false)
    {
        console.log(i, "odd");
    }
}