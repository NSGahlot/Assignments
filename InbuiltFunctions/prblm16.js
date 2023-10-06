function mysplit(str)
{
        var output = [];
        var bag = "";
        
        for(var i=0; i<str.length; i++)
        {
            if(str[i] != " ")
            {
                bag += str[i];
                //console.log(bag);
            }
        
            else
            {
                if(bag != "")
                {
                    output.push(bag);
                    //console.log(bag);
                }
                bag = "";
            }
        }
    output.push(bag);
    return output;
}

var str = "The quick     brown fox";
console.log(mysplit(str));