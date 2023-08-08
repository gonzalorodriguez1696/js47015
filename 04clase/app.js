function descripcion_compra(producto, precio, cantidad){
    return "Producto: "+producto+"\tCantidad: x"+cantidad+"\tPrecio por unidad: $"+precio
}

function detalleFinal(detalle_compra, total, totalConIVA){
    return detalle_compra + "\n" + "Total de la compra: $"+total+"\nTotal con IVA: $"+totalConIVA
}

function conIVA (precio){
    return precio * 1.21
}

let detalle_compra = ""
let total = 0
let rta = ""

do{
    let producto = prompt("Ingrese el producto que compró")
    let cantidad = Number(prompt("Ingrese la cantidad de productos que compró"))
    let precio = Number(prompt("Ingrese el precio"))
    
    detalle_compra = detalle_compra + descripcion_compra(producto, precio, cantidad) + "\n"
    total = total + precio * cantidad

    alert( detalle_compra )

    rta = prompt("Ingrese 'ESC' para salir. 'Aceptar' para continuar.")

}while(rta != "ESC")

let totalConIVA = conIVA(total)

alert( detalleFinal(detalle_compra, total, totalConIVA) )