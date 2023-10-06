var products = {
    grocery : ["Rice", "Dal", "salt"],
    quantity : [2,3,1],
    price : [60, 50, 20],

    data : [],

    details : function()
    {
        for(var i=0; i<this.grocery.length; i++)
        {
            var obj = {};
            obj.name = this.grocery[i];
            obj.quantity = this.quantity[i];
            obj.price = this.price[i];

            this.data.push(obj);
        }
        console.log(this.data)
    },

    total : function()
    {
        var sum = 0;
        for(var i=0; i<this.grocery.length; i++)
        {
            var hisab = this.quantity[i] * this.price[i];
            sum += hisab;

        }
        console.log(sum);
    }
}

products.details();
products.total();