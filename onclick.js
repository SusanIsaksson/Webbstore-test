const fruits = ["päron", "banan", "äpple"]

for (let i=0; i < fruits.length; i++) {
    const fruit = fruits[i];

    let printButton = document.createElement("button")
    printButton.innerHTML = "Välj " + fruit

    printButton.addEventListener("click", function () {
        printFruitBox(fruit)

           
    })

    document.body.appendChild(printButton)
   
}

function printFruitBox(fruit) {
    let fruitBox = document.createElement("p")
    fruitBox.style.width = "200px"
    fruitBox.style.height = "200px"
    fruitBox.style.margin = "20px"
    fruitBox.style.backgroundColor = "purple"
    fruitBox.innerHTML = fruit

    document.body.appendChild(fruitBox)    
}

