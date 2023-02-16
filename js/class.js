const catalogo = []

class Producto {
    constructor(id,nombre, categoria, precio, imagen, cantidad){
        this.id = id
        this.nombre = nombre,
        this.categoria = categoria,
        this.precio = precio
        this.imagen = imagen
        this.cantidad = cantidad
    }
}

async function cargarCatalogo (){
    const respuesta = await fetch ("productos.json")
    const data = await respuesta.json()

    for (let producto of data){
        let productoNuevo = new Producto(producto.id, producto.nombre, producto.categoria, producto.precio, producto.imagen)
        catalogo.push(productoNuevo)
    }

    localStorage.setItem("catalogo", JSON.stringify(catalogo))
}

if (localStorage.getItem("catalogo")){
    for (let producto of JSON.parse(localStorage.getItem("catalogo"))){
        let productoNuevo = new Producto(producto.id, producto.nombre, producto.categoria, producto.precio, producto.imagen)
        catalogo.push(productoNuevo)
    }
}else{
    cargarCatalogo()
}