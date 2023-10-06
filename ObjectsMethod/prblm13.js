var rectangle = {
    length : 30,
    breadth : 40,

    area : function()
    {
         console.log((this.length * this.breadth));   
    },

    perimeter : function()
    {
        console.log(2*(this.length + this.breadth));
    }
};

rectangle.area();
rectangle.perimeter();
