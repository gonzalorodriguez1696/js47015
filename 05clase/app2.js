class Producto{
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad   = cantidad;
        this.precio  = precio;
    }

    descripcion(){
        //let msj = "Nombre: "+this.nombre+"\nEdad: "+this.edad+"\nCalle: "+this.calle
        //return msj
        return "Nombre: "+this.nombre+"\tCantidad: "+this.cantidad+"\tprecio: "+this.precio
    }
}

class Carrito{
    
    constructor(){
        this.listaProductos = ""
        this.total = 0
    }

    agregarProducto(objProducto){
       this.listaProductos = this.listaProductos + objProducto.descripcion() + "\n"
       this.total = this.total + objProducto.cantidad * objProducto.precio
    }

    mostrar(){
        return this.listaProductos + "\nTotal: $"+this.total+"\nTotal con IVA: $"+this.calcularTotalConIVA()
    }

    calcularTotalConIVA(){
        return this.total * 1.21
    }

}

const carrito = new Carrito()
let rta = ""

do{

    let nombre = prompt("Ingrese su producto")
    let cantidad = Number(prompt("Ingrese la cantidad"))
    let precio = Number(prompt("Ingrese el precio del producto"))

    let objeto_producto = new Producto(nombre, cantidad, precio)

    carrito.agregarProducto(objeto_producto)
    alert(carrito.mostrar())

    rta = prompt("¿Desea cargar otra persona? (Escriba 'ESC' para salir)")
}while(rta != 'ESC')