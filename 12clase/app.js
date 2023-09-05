class Producto {
    constructor(id, nombre, precio, descripcion, img, alt) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = 1;
        this.img = img;
        this.alt = alt;
    }

    descripcionCarrito(){
        return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${this.img}" class="img-fluid rounded-start" alt="${this.alt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this.nombre}</h5>
                        <p class="card-text">Cantidad: ${this.cantidad}</p>
                        <p class="card-text">Precio: ${this.precio}</p>
                        <button class="btn btn-danger" id="ep-${this.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }

    descripcionProducto(){
        return `
        <div class="card border-light" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="${this.alt}">
            <div class="card-body">
                <h5 class="card-title">${this.nombre}</h5>
                <p class="card-text">${this.descripcion}</p>
                <p class="card-text">$${this.precio}</p>
                <button class="btn btn-primary" id="ap-${this.id}">Añadir al carrito</button>
            </div>
        </div>`
    }
}

class ProductoController {
    constructor() {
        this.listaProductos = []
        this.listaFiltrada = []
    }

    agregar(producto) {
        if( producto instanceof Producto){
            this.listaProductos.push(producto)
        }
    }

    cargarProductos(){
        /*
        const p1 = new Producto(1, "ryzen 3", 100, "Un microprocesador de gama baja", "https://m.media-amazon.com/images/I/51Dx39HJ8kL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador amd")
        const p2 = new Producto(2, "ryzen 5", 150, "Un microprocesador de gama media", "https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SX522_.jpg", "un microprocesador amd")
        const p3 = new Producto(3, "ryzen 7", 250, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador amd")
        const p4 = new Producto(4, "ryzen 9", 500, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg", "un microprocesador amd")
        const p5 = new Producto(5, "intel i3", 100, "Un microprocesador de gama baja", "https://m.media-amazon.com/images/I/51C8njBn7mL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel")
        const p6 = new Producto(6, "intel i5", 150, "Un microprocesador de gama media", "https://m.media-amazon.com/images/I/51QJsh7HAhL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel")
        const p7 = new Producto(7, "intel i7", 250, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/51GYVerUgML.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel")
        const p8 = new Producto(8, "intel i9", 500, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/71diouNMRHL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel")

        CP.agregar(p1)
        CP.agregar(p2)
        CP.agregar(p3)
        CP.agregar(p4)
        CP.agregar(p5)
        CP.agregar(p6)
        CP.agregar(p7)
        CP.agregar(p8)
        */
        this.agregar( new Producto(1, "ryzen 3", 100, "Un microprocesador de gama baja", "https://m.media-amazon.com/images/I/51Dx39HJ8kL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador amd") )
        this.agregar(new Producto(2, "ryzen 5", 150, "Un microprocesador de gama media", "https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SX522_.jpg", "un microprocesador amd") )
        this.agregar(new Producto(3, "ryzen 7", 250, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador amd") )
        this.agregar(new Producto(4, "ryzen 9", 500, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg", "un microprocesador amd") )
        this.agregar(new Producto(5, "intel i3", 100, "Un microprocesador de gama baja", "https://m.media-amazon.com/images/I/51C8njBn7mL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel") )
        this.agregar(new Producto(6, "intel i5", 150, "Un microprocesador de gama media", "https://m.media-amazon.com/images/I/51QJsh7HAhL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel") )
        this.agregar(new Producto(7, "intel i7", 250, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/51GYVerUgML.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel") )
        this.agregar(new Producto(8, "intel i9", 500, "Un microprocesador de gama alta", "https://m.media-amazon.com/images/I/71diouNMRHL.__AC_SX300_SY300_QL70_ML2_.jpg", "un microprocesador intel") )
    }

    mostrarEnDOM() {
        let contenedor_productos = document.getElementById("contenedor_productos")

        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += producto.descripcionProducto()
        })

        this.listaProductos.forEach(producto => {
            const btn_ap = document.getElementById(`ap-${producto.id}`)

            btn_ap.addEventListener("click",()=>{
                carrito.agregar(producto)
                carrito.guardarEnStorage()
                carrito.mostrarEnDOM()
            })
        })
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = []
    }

    agregar(producto) {
        if(producto instanceof Producto){
            this.listaCarrito.push(producto)
        }
    }

    eliminar(productoAeliminar){
        let indice = this.listaCarrito.findIndex(producto => producto.id == productoAeliminar.id)
        this.listaCarrito.splice(indice,1)
    }


    guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }

    recuperarStorage(){
        let listaCarritoJSON = localStorage.getItem("listaCarrito")
        let listaCarritoJS = JSON.parse(listaCarritoJSON)
        let listaAux = []
        listaCarritoJS.forEach( producto => {
            //(id, nombre, precio, descripcion, img, alt)
            let nuevoProducto = new Producto(producto.id, producto.nombre, producto.precio, producto.descripcion, producto.img, producto.alt)
            listaAux.push(nuevoProducto)
        })
        this.listaCarrito = listaAux
    }

    mostrarEnDOM() {
        let contenedor_carrito = document.getElementById("contenedor_carrito")
        contenedor_carrito.innerHTML = ""
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += producto.descripcionCarrito();
        })

        this.eventoEliminar()
    }

    eventoEliminar(){
        this.listaCarrito.forEach(producto => {
            //obtener el id de los botones
            const btn_eliminar = document.getElementById(`ep-${producto.id}`)
            //darle el evento
            btn_eliminar.addEventListener("click", ()=>{
                //eliminar del carrito
                this.eliminar(producto)
                //actualizar storage
                this.guardarEnStorage()
                //mostrarEnDOM
                this.mostrarEnDOM()
            })
        })
    }
}

const CP = new ProductoController()
const carrito = new Carrito()

carrito.recuperarStorage()
carrito.mostrarEnDOM()

CP.cargarProductos()
CP.mostrarEnDOM()