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
                    <p class="card-text">Cantidad: ${prod.cantidad}</p>

                    <button class= "btn btn-dark" id="botonEliminar${prod.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
                </div>
            </div>
        </div>
        `
    }
    
    for (const prod of arrayDeProductos){
        document.getElementById(`botonEliminar${prod.id}`).addEventListener("click", () => {
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
        Swal.fire({
            title: 'Está seguro de querer vaciar el carrito?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí, seguro',
            cancelButtonText: 'No, no quiero',
            confirmButtonColor: 'green',
            cancelButtonColor: 'muted',
        }).then((result)=>{
            if(result.isConfirmed){
                Swal.fire({
                    title: 'Carrito Vaciado',
                    icon: 'warning',
                    confirmButtonColor: 'green',
                    })
                    arrayDeProductos.splice(0,arrayDeProductos.length)
                    localStorage.removeItem("carrito")
            }else{
                Swal.fire({
                    title: 'Carrito Aun LLeno',
                    icon: 'info',
                    text: 'Sus productos siguen en el carrito',
                    confirmButtonColor: 'green',
                    timer:3500
                })
            }
        }
        )
    }




function agregarProducto(producto){
    const existe = carrito.find((elem) => elem.id == producto.id)
    if (existe == undefined){

        carrito.push({...producto, cantidad: 1})

        localStorage.setItem("carrito", JSON.stringify(carrito))
        Swal.fire({
            title: 'Producto Agregado!',
            text: `El producto ${producto.nombre} ha sido agregado al carrito`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        })
    } else{
        carrito = carrito.map(prod =>
            prod.id == producto.id ? {...prod, cantidad : prod.cantidad + 1} : prod
        )
        localStorage.setItem("carrito", JSON.stringify(carrito))
        Swal.fire({
            title: 'Producto Agregado!',
            text: `El producto ${producto.nombre} ha sido agregado al carrito`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        })
    }
}


let precioTotal = document.getElementById("precioTotal")
function carritoTotal(arrayDeProductos){
    let total = arrayDeProductos.reduce((acc, productoCarrito)=>acc + productoCarrito.cantidad * productoCarrito.precio ,0)
    precioTotal.innerHTML = `El total es <strong>$${total}</strong>`  
}


//ICONO CARRITO : muestra los productos agregados al array Carrito.
let botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click", () =>{
        mostrarCarrito(carrito)
})


let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
botonFinalizarCompra.addEventListener("click", () => {
    if (carrito.length === 0){
        Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Agrega algo al carrito para iniciar su compra",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
    } else{
        location.href = "compra.html";
    }
})


