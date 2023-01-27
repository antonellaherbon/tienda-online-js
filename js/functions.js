
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


function ordenar(array){
    let ordenDeseado = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente`))
    switch(ordenDeseado){
        case 1:
            ordenarMenorAMayor(array)
            break
        case 2:
            ordenarMayorAMenor(array)
            break
        case 3:
            ordenarPorNombre(array)
            break
        default:
            console.log("Ingrese una opción válida, gracias!")
    }
}


function buscarProducto(array){
    let productoABuscar = prompt("Ingrese el producto que desea buscar")
    let productoEncontrado = array.find(
        (producto)=>producto.nombre.toLowerCase() == productoABuscar.toLowerCase()
        )
    if(productoEncontrado == undefined){
        console.log(`El libro ${productoABuscar} no se encuentra en stock`)
    }else{
        console.log(productoEncontrado)
    }    
}


do{
    let opcionDeseada = parseInt(prompt(`Ingrese la opción deseada
    1 - Consultar catalogo
    2 - Agregar al carrito
    3 - Vaciar Carrito 
    4 - Ordenar productos (filter)
    5 - Buscar producto por nombre 
    0 - Salir del menu`))
    switch(opcionDeseada){
        case 0:
            console.log("Gracias por utilizar la aplicacion! Espero haya sido de tu agrado :)")
            salirMenu = true
            break
        case 1:
            mostrarCatalogo(catalogo)
            break
        case 2:
            console.log("agregar al carrito")
            break
        case 3:
            console.log("vaciar carrito")
            break
        case 4:
            ordenar(catalogo)
            break
        case 5:
            buscarProducto(catalogo)
            break
        default:
            console.log("Opción no valida, por favor elija alguna valida")
            break
    }
}while(!salirMenu)
