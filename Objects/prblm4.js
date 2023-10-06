// Updating the objects

var data1 = {
    name1 : "Narendra Singh",
    age : 27,
    gender : "Male",
    city : "Jaipur",
    hobby : "Movies"// for multiple option we will use array ["Movies", "Gaming"]
 };

 // Bracket notation
 data1["name1"] = "Shanu";
 data1["age"] = "28";
 data1["gender"] = "Male";
 data1["city"] = "Bangalore";
 data1["hobby"] = "Coding", "Studying";

 console.log(data1);


data1.name1 = "Shanu";
 data1.age = "28";
 data1.gender = "Male";
 data1.city = "Bangalore";
 data1.hobby = "Coding";
 console.log(data1);