function mostrarCatalogo(catalogoDeProductos){
    console.log(`Nuestro catalogo es:`)
    for(let producto of catalogoDeProductos){
        console.log(`El producto ${producto.nombre} vale ${producto.precio} y pertenece a la categoria de ${producto.categoria}`)
    }
}

let coincidencia = document.getElementById("coincidencia")

function buscarNombre(buscado, array){
    let busquedaArray = array.filter(
        (producto) => producto.nombre.toLowerCase().includes(buscado)
    )
    if (busquedaArray.length == 0){
        coincidencia.innerHTML = `<h3> El producto que usted está buscando no existe! </h3>`
    }
    else{
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArray)
    }
}

//Capturo DOM
let productosDiv = document.getElementById("productos")

// Mostrar productos en HTML
for(let producto of catalogo){
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

    let carrito = []

    agregarBtn.addEventListener("click", ()=>{
        // console.log(`El producto ${producto.nombre} ha sido agregado al carrito`)
        carrito.push({
            id : producto.id,
            nombre : producto.nombre,
            precio : producto.precio,
        })
        console.log(carrito)
    })
}

let buscador = document.getElementById("buscador")

buscador.addEventListener("input", () => {
    // console.log(buscador.value)
    buscarNombre(buscador.value, catalogo)
})

let selectOrden = document.getElementById("selectOrden")

selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)

    if (selectOrden == 1){
        ordenarMayorAMenor(catalogo)
    }
    else if (selectOrden == 2){
        ordenarMenorAMayor(catalogo)
    }
    else if (selectOrden == 3){
        ordenarPorNombre(catalogo)
    }
    else{
        mostrarCatalogo(catalogo)
    }
})

