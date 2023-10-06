var e_commerce = {
    products : ["earphone", "headphone", "earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],

    total_price : function(){
        var x = this.quantity[0] * this.price[0];
        var y = this.quantity[1] * this.price[1];
        var z = this.quantity[2] * this.price[2];
        console.log(x+y+z);
    }
}

e_commerce.total_price();