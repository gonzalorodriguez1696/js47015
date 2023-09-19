// pertenece a la BD, ignorar.
const BD = [
    {id: 1, nombre: 'Producto_1', precio: 1500},
    {id: 2, nombre: 'Producto_2', precio: 2500},
    {id: 3, nombre: 'Producto_3', precio: 3500},
    {id: 4, nombre: 'Producto_4', precio: 3500},
]


//APP JS

//simula una petición a un servidor, tardando 3s, retorna un arreglo de productos.
const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    })
}

// inicializamos con un array vacío
let listaProductos = []

const renderProductos = (arr) => {
    const contenedor_productos = document.getElementById("contenedor_productos")
    // función que genere la vista de los productos
    contenedor_productos.innerHTML = ""
    arr.forEach(producto => {
        contenedor_productos.innerHTML += `<p>${producto.id} ${producto.nombre} $${producto.precio}</p>`
    });
}

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos()
    .then( res =>{
        listaProductos = res
        renderProductos(listaProductos)
    })
