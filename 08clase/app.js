class Producto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
    }

    agregarCantidad(cantidad){
        this.cantidad = this.cantidad + cantidad
    }

    descripcion(){
        return "id: " + this.id + " | nombre: "+ this.nombre+ " | precio: "+this.precio+ "\n"
    }
}

class Carrito{
    constructor(){
        this.listaDeCompras = []
    }

    agregar(producto){
        this.listaDeCompras.push(producto)
    }

    calcular_total(){
        return this.listaDeCompras.reduce( (acumulador, producto)=> acumulador + producto.precio * producto.cantidad , 0 )
    }
}

class ProductoController{
    constructor(){
        this.listaDeProductos = []
    }

    agregar(producto){
        this.listaDeProductos.push(producto)
    }

    mostrar(){
        let acumuladora_descripcion = ""
        this.listaDeProductos.forEach( producto => {
            acumuladora_descripcion = acumuladora_descripcion + producto.descripcion()
        })
        return acumuladora_descripcion
    }
}

const obj_carrito = new Carrito()
const cp = new ProductoController()

const p1 = new Producto(1,"shampoo", 415)
const p2 = new Producto(2,"acondicionador", 830)
const p3 = new Producto(3,"jabon", 250)

cp.agregar(p1)
cp.agregar(p2)
cp.agregar(p3)

alert(cp.mostrar())

/*
    *Instancio productos, de la clase Producto
    *Los productos los vamos a añadir al controlador
    *cp va a mostrar los productos al usuario

    *¿Cómo compra el usuario?
    *cp, deberia tener un método de busqueda por ID.
    * producto, aumentar la cantidad según lo que quiera el usuario
    * carrito, deberia tener un método capaz de añadir al producto
*/