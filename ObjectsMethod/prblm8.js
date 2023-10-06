var data = {
    name : "Rajesh",
    grade : "X",
    section : "A",
    marks : [
        {maths:33, science:40, english:55},
        {maths:40, science:60, english:35}
    ],

    hobbies:["coding", "running"]
};

// data(object hai). marks[array hai]. marks{object main hai}

console.log(data.marks[0].maths);
console.log(data["marks"][0]["maths"]); // bracket index