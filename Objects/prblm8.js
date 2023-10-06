// Interview question
    var arr = ["Ramesh", "Suresh", "Ramesh", "kamlesh", "Suresh", "Rupak"];
    var party = [];
    var present = false;

    for(var i=0; i<arr.length; i++)
    {
        for(var j=0; j<party.length; j++)
        {
            if(arr[i] == arr[j])
            {
                present = true;
                break;
            }
        }

        if(present == false)
        {
            party.push(arr[i])
            present = false;
        }
        else
        {
            present = false;
        }
    }

    console.log(party);