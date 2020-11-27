var cart = [];

var Item = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count   
};
//Add items to the cart
function addItemToCart(name, price, count) { 
    var item = new Item(name, price, count);
    cart.push(item);
}

addItemToCart("ny mobile, 6666, 1");

console.log(cart);