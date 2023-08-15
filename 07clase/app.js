class Carrito{
    constructor(){
        this.listaDeCompras = [{id:1,nombre:"jabon",precio: 200, cantidad: 3},
        {id:2,nombre:"shampoo",precio: 200, cantidad: 2},
        {id:3,nombre:"acondicionador",precio: 300, cantidad: 2}]
    }

    calcular_total(){
        return this.listaDeCompras.reduce( (acumulador, producto)=> acumulador + producto.precio * producto.cantidad , 0 )
    }
}

const obj_carrito = new Carrito()
console.log( obj_carrito.calcular_total() )