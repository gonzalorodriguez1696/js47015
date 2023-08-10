//productos, carrito
class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
    }
}

const listaProductos = []
const carrito = []
let descripcionProductos = ""
/*
const p1 = new Producto(1,"Shampoo",250)
const p2 = new Producto(2,"Acondicionador",350)
const p3 = new Producto(3,"Jabon", 250)
const p4 = new Producto(4,"Gel", 300)
const p5 = new Producto(5,"Esponja", 500)

listaProductos.push(p1)
listaProductos.push(p2)
listaProductos.push(p3)
listaProductos.push(p4)
listaProductos.push(p5)
*/
/*
const p1 = new Producto(1,"Shampoo",250)
const p2 = new Producto(2,"Acondicionador",350)
const p3 = new Producto(3,"Jabon", 250)
const p4 = new Producto(4,"Gel", 300)
const p5 = new Producto(5,"Esponja", 500)

const listaProductos = [p1,p2,p3,p4,p5]
*/

//creamos la lista de productos
listaProductos.push(new Producto(1,"Shampoo",250))
listaProductos.push(new Producto(2,"Acondicionador",350))
listaProductos.push(new Producto(3,"Jabon", 250))
listaProductos.push(new Producto(4,"Gel", 300))
listaProductos.push(new Producto(5,"Esponja", 500))

console.log("Para seleccionar un producto, ingrese el ID")

//mostrarla
for (const objeto of listaProductos) {
    descripcionProductos = descripcionProductos + "id: "+objeto.id+"\nProducto: "+objeto.nombre+"\nPrecio: "+objeto.precio+"\n"
}

let id = prompt(descripcionProductos + "\n" + "Ingrese el ID del producto a comprar")

for (let i = 0; i < listaProductos.length; i++) {
    
    let objeto = listaProductos[i]

    if(id == objeto.id){
        carrito.push(objeto)
        let cantidad = Number(prompt("Ingrese la cantidad que desea del producto"))
        objeto.cantidad = cantidad
    }
}

console.log(carrito)