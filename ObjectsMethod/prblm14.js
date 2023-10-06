var rectangle = {
    length : 30,
    breadth : 40,

    area : function()
    {
        var x =  this.length * this.breadth
        console.log("Area",x);   
    },

    perimeter : function()
    {
        var y = 2*(this.length + this.breadth)
        console.log("Preimeter", y);
    }
};

rectangle.area();
rectangle.perimeter();


rectangle.length = 1000; // we can change the value and then the output will also chng.
rectangle.breadth = 2000;

rectangle.area();
rectangle.perimeter();