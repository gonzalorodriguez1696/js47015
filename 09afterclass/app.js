class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 0
    }

    agregarCantidad(cantidadDeseada){
        this.cantidad = this.cantidad + cantidadDeseada
    }

    descripcion(){
        return "id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+"\n"
    }

    descripcionCarrito(){
        return "id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+ " cantidad: "+this.cantidad+"\n"
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(productoNuevo){
        let existe = this.listaCarrito.some(producto => producto.id == productoNuevo.id)
        if(!existe){
            this.listaCarrito.push(productoNuevo)
        }
    }

    mostrar(){
        let descripcionListaCompra = "Carrito: \n\n"
        this.listaCarrito.forEach( producto => {
            //descripcionListaProductos = descripcionListaProductos + "id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+ " cantidad: "+this.cantidad+"\n"
            descripcionListaCompra = descripcionListaCompra + producto.descripcionCarrito()
        })
        return descripcionListaCompra
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad ,0)
    }
}

class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    mostrar(){
        let descripcionListaProductos = "Recuerde el ID del producto que desea comprar\n\n"
        this.listaProductos.forEach( producto => {
            //descripcionListaProductos = descripcionListaProductos + " id: "+producto.id+ " nombre: "+producto.nombre+ " precio: $"+producto.precio+"\n"
            descripcionListaProductos = descripcionListaProductos + producto.descripcion()
        })
        return descripcionListaProductos
    }

    buscarId(id){
        return this.listaProductos.find(producto => producto.id == id)
    }
}

//creamos productos
const p1 = new Producto(1,"shampoo",250)
const p2 = new Producto(2,"acondicionador",350)
const p3 = new Producto(3,"jabón",150)
const p4 = new Producto(4,"desodorante",500)
const p5 = new Producto(5,"perfume",1000)

//creamos un arreglo que agregue dichos productos

//const listaProductos = [p1,p2,p3,p4,p5]

const carrito = new Carrito()
const controladorP = new ProductoController()

controladorP.agregar(p1)
controladorP.agregar(p2)
controladorP.agregar(p3)
controladorP.agregar(p4)
controladorP.agregar(p5)

let rta

do{
    //mostrar la lista de productos
    alert( controladorP.mostrar() )
    //pido al usuario el ID del producto que desea comprar
    let id = Number(prompt("Ingrese el ID del producto que desea comprar!"))
    const producto = controladorP.buscarId(id)
    //le pregunto al usuario la cantidad del producto que desea
    let cantidadDeseada = Number(prompt("Ingrese la cantidad que desea"))
    //producto.cantidad = cantidadDeseada
    producto.agregarCantidad(cantidadDeseada)
    //agregarlo al carrito
    carrito.agregar(producto)
    //mostrar al usuario el producto que posee
    alert( carrito.mostrar() )

    rta = prompt("¿Desea finalizar la compra? (escriba 'SI' para finalizar)").toLowerCase()
}while(rta != "si")

//mostrar total
alert( "El total es de: $"+carrito.calcularTotal() )