function convertTolower(x)
{
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for(var i=0; i<upper.length; i++)
  {
    if(upper[i] == x)
    {
        return lower[i];
        
    }
  }
}
console.log(convertTolower("N"));



