// Medium//

let sharePizza = pizzaSlices(8)

function pizzaSlices (x) {
    function divide(y) {
        return `Each person gets ${(x)/(y)} slices of pizza.`;
    }
        return divide;
}

 console.log(sharePizza(2))
 console.log(sharePizza(3))