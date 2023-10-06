
function arrayJoin(n, sep)
{
    var bag = "";

    for(var i=0; i<n.length; i++)
    {
        bag += n[i] + sep;
        //console.log(bag);
        
    }
    
    
  return bag;
}

var x = arrayJoin(["fire", "water", "air"], "+" );
console.log(x);

