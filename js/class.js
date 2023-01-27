const catalogo = []
let salirMenu = false

class Producto {
    constructor(id,nombre, categoria, precio, imagen){
        this.id = id
        this.nombre = nombre,
        this.categoria = categoria,
        this.precio = precio
        this.imagen = imagen
    }
    mostrarProducto(){
        console.log(`Se ingresó el producto ${this.nombre} perteneciente a la categoria ${this.categoria} y su precio es ${this.precio}`)
    }
}

const producto1 = new Producto("1","MacBook","Eléctronica", 199000, "MacBook.jpg")
const producto2 = new Producto("2","Placa de Video","Eléctronica", 100000, "PlacaDeVideo.png")
const producto3 = new Producto("3","Teclado Mécanico","Eléctronica", 17248, "TecladoMecanico.jpg")
const producto4 = new Producto("4","Mouse","Eléctronica", 8500, "Mouse.jpg")
const producto5 = new Producto("5","Auriculares","Eléctronica", 10000, "Auriculares.jpg")
const producto6 = new Producto("6","CPU","Eléctronica", 70000, "CPU.jpg")

catalogo.push(producto1,producto2,producto3,producto4,producto5,producto6)
console.log(catalogo)