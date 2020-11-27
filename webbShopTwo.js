const carts = ["iPhoneX", "LGV30", "OnePlus5", "SamsungS8"]

for (let i=0; i < carts.length; i++) {
    const cart = carts[i];

        let printButton = document.createElement("button")
        printButton.innerHTML = cart + "<br>" + " Lägg i varukorg"

        printButton.addEventListener("click", function(event) {
            printCartBox(cart)
            location.href = "/webbShopTwoKorg.html";
        })

        document.body.appendChild(printButton)
}

function printCartBox(cart) {
    let cartBox = document.createElement("div")
    cartBox.style.width = "200px"
    cartBox.style.height = "200px"
    cartBox.style.margin = "20px"
    cartBox.style.backgroundColor = "yellow"
    cartBox.innerHTML = cart

    // document.getElementById("tillVarukorgen").onclick = function () {
    //     location.href = "/webbShopTwoKorg.html";
        
    // };

    document.body.appendChild(cartBox)
}
//     "iPhoneX.png, iPhoneX, 11950, 1",
//     "LGV30.png, LG V30, 4994, 1",
//     "OnePlus5.png, OnePlus 5, 7990, 1",
//     "SamsungS8.png, Samsung S8, 10980, 1"
 
// ];

//     const Item = function(productData) {
      
//             };
//             console.log(Item)
// document.getElementById("main").innerHTML = productData;

// function displayCart() {
//        // console.log("*** Display Cart ***") visar valda item köp
//     const cartArray = listCart();
//     // console.log("**** Count Cart : ****")
//     const output = "";

//     for (var i in cartArray) {
//         output += "<li>"
//             +cartArray[i].name
//             +" "+cartArray[i].count
//             +" x "+cartArray[i].price
//             +" = "+cartArray[i].total
//             +" <button class='delete-item' data-name='"
//             +cartArray[i].name+"'>X</button>"
//             +"</li>";
//     }
//     $("#show-cart").html(output);
//     $("#total-cart").html( totalCart() );
// }
//     console.log(displayCart)

// $(".add-to-cart").click(function(event) {
//     event.preventDefault();
//     const name = $(this).attr("data-name");
//     const price = Number ($(this).attr("data-price"));

//     addItemToCart(name, price, 1);
//     displayCart();
// });

// $("#clear-cart").click(function(event){
//     clearCart();
//     displayCart();
// });