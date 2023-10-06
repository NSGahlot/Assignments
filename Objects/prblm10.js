// IMP Question

    var name1 = "masai";

    var details = {};

    for(var i=0; i<name1.length; i++)
    {
        var char = name1[i]

        if(details[char] == undefined)
        {
            details[char] = 1;
        }

        else
        {
            var prev = details[char];
            details[char] = prev+1;
        }
    }

    console.log(details);