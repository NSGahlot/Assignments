var friends = [
    {name : "Yash", age : 22, city : "Jaipur"}, // 0
    {name : "Shanu", age : 27, city : "Bangalore"},// 1
    {name : "Ayush", age : 28, city : "Pune"}      // 2
];

var obj1 = friends[0];
// console.log(obj1["name1"], obj1["age"], obj1["city"]); // Bracket notation
// console.log(friends[1].name2, friends[1].age, friends[1].city); // dot notation 

for(var i=0; i<friends.length; i++)
{
    console.log(friends[i].name, friends[i].age, friends[i].city); // loop b/c friends is an array
}
