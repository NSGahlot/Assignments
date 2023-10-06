var data1 = {
    name1 : "Narendra Singh",
    age : 27,
    gender : "Male",
    city : "Jaipur",
    hobby : ["Movies"]
};

data1["son"] = "Chunnu";

// Bracket Notation

var arr = data1["hobby"]; // Indirect way
arr.push("Jogging");

data1["hobby"].push("Jogging");

// Dot notation

data1.hobby.push("Running");

console.log(data1);