function checkPrime(n)
{
  factors = 0;
  for(var i=1; i<=n; i++)
  {
    if(n%i==0)
    {
      factors++;
    }
  }
  if(factors == 2){
    console.log(n, "Prime");
  }
  //else{
    //console.log(n, "Not Prime");
  //}
}

for(var i=2; i<=100; i++){
  checkPrime(i);
}