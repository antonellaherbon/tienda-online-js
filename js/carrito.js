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
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="assets/${prod.imagen}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$${prod.precio}</p>
                    <button class= "btn btn-dark" id="botonEliminar${prod.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
                </div>
            </div>
        </div>
        `
        
        let botonEliminar = document.getElementById(`botonEliminar${prod.id}`)
        botonEliminar.addEventListener("click", () => {
            eliminarUnProducto(prod.id)
            console.log(`el producto ${prod.nombre} ha sido eliminado`)
            console.log(prod.id)
            
        })

    }
}

//Botón "VACIAR CARRITO" => elimina todos los productos al mismo tiempo.
function vaciarCarrito(arrayDeProductos){
    while (arrayDeProductos.length > 0) {
        const confirmarBorrar = window.confirm (`Estás seguro de borrar el contenido?`)
        if (confirmarBorrar){
        arrayDeProductos.splice(0,arrayDeProductos.length)
        localStorage.removeItem("carrito")
        }
    }
}


function agregarProducto(producto){
    carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function eliminarUnProducto(id){
    // console.log("entró")
    
}


//ICONO CARRITO : muestra los productos agregados al array Carrito.
let botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click", () =>{
    mostrarCarrito(carrito)
})


let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
botonFinalizarCompra.addEventListener("click", () => {
    
})
