let carrito 

//pregunto si hay algo en el carrito en el Storage.
let carritoLS = localStorage.getItem("carrito")
if (carritoLS) {
    // le asigno al carrito lo que haya en el storage almacenado.
    carrito = JSON.parse(carritoLS)
} else {
    // inicializo un array vacio
    carrito = []
    localStorage.setItem("carrito", carrito)
}

function mostrarCarrito(arrayDeProductos){
    let modalCarrito = document.getElementById("modal-bodyCarrito")
    modalCarrito.innerHTML = ""
    for (const prod of arrayDeProductos){
        modalCarrito.innerHTML +=
        `
        <div class="card border-primary mb-3" id ="productoCarrito${prod.id}" style="max-width: 540px;">
            <img class="card-img-top" height="300px" src="assets/${prod.imagen}" alt="">
            <div class="card-body">
                <h4 class="card-title">${prod.nombre}</h4>
                    
                <p class="card-text">$${prod.precio}</p> 
                <button class= "btn btn-danger" id="botonEliminar${prod.id}"><i class="fas fa-trash-alt"></i></button>
            </div>    
        </div>
        `   
        
        // let botonEliminar = document.getElementById(`botonEliminar${prod.id}`)
        // botonEliminar.addEventListener("click", () => {

        //     console.log(`el producto ${prod.nombre} ha sido eliminado`)
        // })

    }
}


// function vaciarCarrito(modalCarrito){
//     modalCarrito.innerHTML = ""
// }


function agregarProducto(producto){
    carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


//ICONO CARRITO : muestra los productos agregados al array Carrito.
let botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click", () =>{
    mostrarCarrito(carrito)
})



