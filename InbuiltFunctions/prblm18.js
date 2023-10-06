function customJoin(words = [], sep = ",")
{
    let i = 0;
    const N = words.length;
    console.log(N);
    let bag = "";

    while(i< N)
    {
        if(i===N-1)
        {
            sep = "";
        }
        bag += words[i] + sep;
        i++;
    }
    return bag;
}

console.log(customJoin(["fire", "water", "air"], " + "));