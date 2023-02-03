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
        <div class="card mb-3" id = "productoCarrito${prod.id}" style="max-width: 540px;">
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
    
    }
    
    for (const prod of arrayDeProductos){
        document.getElementById(`botonEliminar${prod.id}`).addEventListener("click", () => {
            console.log(`el producto ${prod.nombre} (${prod.id}) ha sido eliminado`)
            let prodEnCarrito = document.getElementById(`productoCarrito${prod.id}`)
            prodEnCarrito.remove()
            Swal.fire({
                title: 'Eliminado',
                text: `El producto ${prod.nombre} ha sido eliminado`,
                icon: 'info',
                timer: 1500,
                showConfirmButton: false
            })
            //borrar del array
            let prodAEliminar = arrayDeProductos.find((producto) => producto.id == prod.id) // encontramos el obj a eliminar
            let posicionProd = arrayDeProductos.indexOf(prodAEliminar)

            arrayDeProductos.splice(posicionProd,1)
            localStorage.setItem("carrito", JSON.stringify(arrayDeProductos))
            carritoTotal(arrayDeProductos)
        })
    }
    carritoTotal(arrayDeProductos)
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
    const existe = carrito.find((elem) => elem.id == producto.id)
    if (existe == undefined){

        carrito.push(producto)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        Swal.fire({
            title: 'Producto Agregado!',
            text: `El producto ${producto.nombre} ha sido agregado al carrito`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        })
    } else{
        console.log("ya existe")
        Swal.fire({
            title: 'Proudcto ya agregado!',
            text: `El producto ${producto.nombre} ya existe en el carrito`,
            icon: 'warning',
            timer: 2000,
            showConfirmButton: false
        })}
}


let precioTotal = document.getElementById("precioTotal")
function carritoTotal(arrayDeProductos){
    let total = arrayDeProductos.reduce((acc, productoCarrito)=>acc + productoCarrito.precio ,0)
    precioTotal.innerHTML = `El total es <strong>$${total}</strong>`
}
//ICONO CARRITO : muestra los productos agregados al array Carrito.
let botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click", () =>{
    mostrarCarrito(carrito)
})


let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
botonFinalizarCompra.addEventListener("click", () => {
    
})
