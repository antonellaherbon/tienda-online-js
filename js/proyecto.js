function ordenarMenorAMayor(array){
    const menorAMayor = [].concat(array)
    menorAMayor.sort((par1,par2)=> par1.precio - par2.precio)
    mostrarCatalogo(menorAMayor)
}

function ordenarMayorAMenor(array){
    const mayorAMenor = [].concat(array)
    mayorAMenor.sort((par1,par2) => par2.precio - par1.precio)
    mostrarCatalogo(mayorAMenor)
}

function ordenarPorNombre(array){
    const porNombre = [].concat(array)
    porNombre.sort((par1,par2) => {
        if (par1.nombre > par2.nombre) {
            return 1
        }
        if (par1.nombre < par2.nombre) {
            return -1
        }
        return 0;
        }) 
    mostrarCatalogo(porNombre)
}

let productosDiv = document.getElementById("productos")
function mostrarCatalogo(catalogoDeProductos){
    // console.log(`Nuestro catalogo es:`)
    // for(let producto of catalogoDeProductos){
    //     console.log(`El producto ${producto.nombre} vale ${producto.precio} y pertenece a la categoria de ${producto.categoria}`)
    // }

    // Mostrar productos en HTML
    
    productosDiv.innerHTML = "<h1>Mis Productos</h1>"
    for(let producto of catalogoDeProductos){
        
        let nuevoProductoDiv = document.createElement("div")

        nuevoProductoDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mt-4")

        nuevoProductoDiv.innerHTML = `
        <div id="${producto.nombre}" class="card" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${producto.imagen}" alt="${producto.nombre}">
                <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <p>Categoria: ${producto.categoria}</p>
                    <p class="">Precio: ${producto.precio}</p>
                <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
                </div>
        </div>
        `
        productosDiv.appendChild(nuevoProductoDiv)
        
        let agregarBtn = document.getElementById(`agregarBtn${producto.id}`)

        agregarBtn.addEventListener("click", ()=>{
            console.log(`El producto ${producto.nombre} ha sido agregado al carrito`)
        })
    }
}

mostrarCatalogo(catalogo)

let coincidencia = document.getElementById("coincidencia")

function buscarNombre(buscado, array){
    let busquedaArray = array.filter(
        (producto) => producto.nombre.toLowerCase().includes(buscado)
    )
    if (busquedaArray.length == 0){
        productosDiv.innerHTML = ""
        coincidencia.innerHTML = `<h3> El producto que usted está buscando no existe! </h3>`
    }
    else{
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArray)
    }
}

let buscador = document.getElementById("buscador")

buscador.addEventListener("input", () => {
    // console.log(buscador.value)
    buscarNombre(buscador.value, catalogo)
})

let selectOrden = document.getElementById("selectOrden")

selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)

    if (selectOrden.value == 1){
        ordenarMayorAMenor(catalogo)
    }
    else if (selectOrden.value == 2){
        ordenarMenorAMayor(catalogo)
    }
    else if (selectOrden.value == 3){
        ordenarPorNombre(catalogo)
    }
    else{
        mostrarCatalogo(catalogo)
    }
})


let botonVaciarCarrito = document.getElementById("botonVaciarCarrito")
botonVaciarCarrito.addEventListener("click", () =>{
    
    console.log("carrito vacio")
})

