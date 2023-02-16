let thead = document.getElementById("thead")
let btnFinalizarCompra = document.getElementById("btnFinalizarCompra")
let totalCompra = document.getElementById("totalProceso")
let cliente = document.getElementById("cliente")

function procesarPedido(){
    const pedido = JSON.parse(localStorage.getItem("carrito"))
    for (let producto of pedido){
        thead.innerHTML += `
        <tr>
            <td>
              <img class="img-fluid img-carrito" src="assets/${producto.imagen}"/>
            </td>
            <td scope="col">${producto.nombre}</td>
            <td scope="col">${producto.cantidad}</td>
            <td scope="col">$${producto.precio}</td>
            <td scope="col">$${producto.precio * producto.cantidad}</td>
        </tr>
        `  
    }
    pedidoTotal(pedido)
}

procesarPedido()

function pedidoTotal(pedido){
    let total = pedido.reduce((acc, producto)=>acc + producto.cantidad * producto.precio ,0)
    console.log(total)
    totalCompra.innerHTML = `<strong>$${total}</strong>`  
}

function finalizarCompra(){
    localStorage.removeItem("carrito")
        Swal.fire({
            title: 'Su compra se ha realizado con exito. Espero que disfrute sus productos.',
            showConfirmButton: false,
            timer: 2000})
        setTimeout(() => {
            location.href = "proyecto.html"
        }, 2000)
    }


