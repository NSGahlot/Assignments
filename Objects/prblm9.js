var arr = ["Ramesh", "Suresh", "Ramesh", "kamlesh", "Suresh", "Rupak"];

var diary = {}; // object

for(var i=0; i<arr.length; i++)
{
    var person = arr[i];
   diary[person] = "Present";
   // object[key] = "values";
}

console.log(Object.keys(diary));
console.log(Object.values(diary));

for(var key in diary)
{
    console.log(key);
}

console.log(Object.keys(diary));