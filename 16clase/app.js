//GET de mis productos en simularAPI.json
/*
fetch('simularAPI.json')
    .then((respJSON) => respJSON.json())
    .then((listaProductos) => {

        const contenedor_productos = document.getElementById("contenedor_productos")

        contenedor_productos.innerHTML = ""
        
        listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `<h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio}</p>`
        });

    });
*/
async function consumirAPIyMostrar() {
    let respJSON = await fetch('simularAPI.json')
    let listaProductos = await respJSON.json()
    renderizarProductos(listaProductos)
}

function renderizarProductos(arreglo){
    const contenedor_productos = document.getElementById("contenedor_productos")
    contenedor_productos.innerHTML = ""

    arreglo.forEach(producto => {
        contenedor_productos.innerHTML += `<h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio}</p>`
    });
}

consumirAPIyMostrar()