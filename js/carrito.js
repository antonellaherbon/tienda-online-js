let carrito 

//pregunto si hay algo en el carrito en el Storage.
let carritoLS = localStorage.getItem("carrito")

if (carritoLS) {
    carrito = carritoLS
    console.log(carrito)
} else {
    carrito = []
    localStorage.setItem("carrito", carrito)
    console.log(carrito)
}



