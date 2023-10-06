var details = {
    name : "Shubham",
    age : 32,
    hobbies : "Walking",

    print : function(){
        console.log("My name is", this.name);
        console.log("My age is", this.age);
        console.log("My hobbies is", this.hobbies);
    }
};

details.print();