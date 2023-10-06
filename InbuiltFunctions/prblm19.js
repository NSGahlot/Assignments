function arrayJoin(n, sep)
{
    const N = n.length // 3 
    var bag = "";

    for(var i=0; i<N; i++)
    {
        if(i === N-1)
        {
            sep = "";
            //console.log(sep);
        }
        bag += n[i] + sep;
    }
    return bag;
    
}

//var x = arrayJoin(["Fire", "Water", "Air"], " + ");
console.log(arrayJoin(["Fire", "Water", "Air"], " + "));