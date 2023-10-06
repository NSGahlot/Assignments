// write a custom function that has the same behavior of inbuilt array last index of function
function arrayLast(animals, item)
{
    var n = animals.length-1
for(var i=n; i>0; i--)
{
      if(n[i] === item)
      {
        return i;
      }
}
return -1;

}

console.log(arrayLast(['Dodo', 'Tiger', 'Penguin', 'Dodo']), 'Dodo');