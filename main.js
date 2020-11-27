let productData

function listProductData() {

    for (i = 0; i < productData.length; i++) {
        document.getElementById("main").innerHTML += `
        <div class="product-container">
        <div class="product-card">
            <h1 class="product-title">${productData[i].title}</h1>
            <p class="product-description">${productData[i].description}</p>
            <img class="product-image" src="imgs/${productData[i].image}" alt="">
            <h2 class="product-price">${productData[i].price} kr</h2>
            <button class="btn-add-to-cart">Lägg till i kundvagnen</button>
        </div>
        </div>
        `
        console.log(productData)
    }
}

fetch("./products.json")
.then(response => {
   return response.json();
})
.then(products => {
    productData = products
    listProductData()
})

const button = document.getElementById("antalProdukter"),
    count = 0;


// function AddtoCart() {
//     console.log('hi');  
//     var x = document.getElementById('');
//     var new_row = x.rows(1).cloneNode(true);
//     var len = x.rows.length;
//     new_row.cells(0).innerHTML = len;
//     var inp1 = new_row.cells [1].getElementsByTagName('input')[0];
//     inp1.id += len;
//     inp1.value = '';
//     var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
//     inp2.id += len;
//     inp2.value = '';
//     x.appendChild(new_row);
//     console.log('hi')
// }

// Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var cart = [];

// var Item = function (name, price, count) {
//     this.name = name
//     this.price = price
//     this.count = count   
// };
// //Add items to the cart
// function addItemToCart(name, price, count) { 
//     for (var i in cart)  {
//         if (cart[i].name === name) {
//             cart[i].count ++;
//             return;
//         }
//     }

//     var item = new Item(name, price, count);
//     cart.push(item);
// }

// addItemToCart("ny mobile", 6666, 3);
// addItemToCart("nyare mobile", 6666, 2);
// addItemToCart("ny mobile", 6666, 1);

// console.log(cart);
// console.log( cart[0] );
// console.log( cart[0].name );


