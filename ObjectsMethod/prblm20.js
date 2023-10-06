var details = {
      data : [],
    addStudent : function(name1, maths1, science1, english1)
    {
    
            var obj = {};
            obj.name = name1;
            obj.maths = maths1;
            obj.science = science1;
            obj.english = english1;
            
            this.data.push(obj);
     
}
}


details.addStudent("Shanu", 10, 20, 30);
details.addStudent("Rajesh", 15, 25, 35);
details.addStudent("Rohit", 20, 30, 40); // it is working as a loop we are calling it 3 times

console.log(details.data);