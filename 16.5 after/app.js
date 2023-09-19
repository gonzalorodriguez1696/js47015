class Producto {
    constructor(id, nombre, precio, descripcion, img, alt, cantidad = 1) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.img = img;
        this.alt = alt;
    }

    aumentarCantidad() {
        //this.cantidad = this.cantidad + 1
        this.cantidad++
    }

    disminuirCantidad() {
        //this.cantidad = this.cantidad - 1
        if (this.cantidad > 1) {
            this.cantidad--
        }
    }

    descripcionCarrito() {
        return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${this.img}" class="img-fluid rounded-start" alt="${this.alt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this.nombre}</h5>
                        <p class="card-text">Cantidad:
                        <button class="btn btn-dark" id="disminuir-${this.id}"><i class="fa-solid fa-minus"></i></button>
                        ${this.cantidad}
                        <button class="btn btn-dark" id="aumentar-${this.id}"><i class="fa-solid fa-plus"></i></button>
                        </p>
                        <p class="card-text">Precio: $${this.precio}</p>
                        <button class="btn btn-danger" id="ep-${this.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }

    descripcionProducto() {
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
    }

    eventoFiltro() {
        const precio_min = document.getElementById("precioMin")
        const precio_max = document.getElementById("precioMax")

        let valorMinimo = 0
        let valorMaximo = Infinity

        precio_min.addEventListener("change", () => {
            if (precio_min.value > 0) {
                valorMinimo = precio_min.value
                console.log(precio_min.value)
                this.filtrarPorPrecio(valorMinimo, valorMaximo)
                this.mostrarEnDOM()
            }
        })

        precio_max.addEventListener("change", () => {
            valorMaximo = precio_max.value
            console.log(precio_max.value)
            this.filtrarPorPrecio(valorMinimo, valorMaximo)
            this.mostrarEnDOM()
        })
    }

    filtrarPorPrecio(min = 0, max = Infinity) {
        this.listaProductos = []
        this.cargarProductos()

        this.listaProductos = this.listaProductos.filter(producto => min <= producto.precio && producto.precio <= max)
    }

    agregar(producto) {
        if (producto instanceof Producto) {
            this.listaProductos.push(producto)
        }
    }

    async preparar_contenedor_productos() {
        let listaProductosJSON = await fetch("productos.json")
        let listaProductosJS = await listaProductosJSON.json()

        listaProductosJS.forEach(producto => {
            /*id,       nombre,             precio,         descripcion,                img,    alt, cantidad = 1*/
            let nuevoProducto = new Producto(producto.id, producto.nombre, producto.precio, producto.descripcion, producto.img, producto.alt, producto.cantidad)
            this.agregar(nuevoProducto)
        })

        this.mostrarEnDOM()
    }

    mostrarToastify(producto) {
        
        Toastify({
            text: `¡${producto.nombre} añadido!`,
            avatar : `${producto.img}`,
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
        
    }

    mostrarEnDOM() {
        let contenedor_productos = document.getElementById("contenedor_productos")

        contenedor_productos.innerHTML = ""

        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += producto.descripcionProducto()
        })

        this.listaProductos.forEach(producto => {
            const btn_ap = document.getElementById(`ap-${producto.id}`)

            btn_ap.addEventListener("click", () => {
                carrito.agregar(producto)
                carrito.guardarEnStorage()
                carrito.mostrarEnDOM()
                this.mostrarToastify(producto)
            })
        })
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = []
        this.localStorageKey = "listaCarrito"
    }

    agregar(productoAgregar) {

        let existe = this.listaCarrito.some(producto => producto.id == productoAgregar.id)

        if (existe) {
            let producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
            producto.aumentarCantidad()
        } else {
            if (productoAgregar instanceof Producto) {
                this.listaCarrito.push(productoAgregar)
            }
        }
    }

    eliminar(productoAeliminar) {
        let indice = this.listaCarrito.findIndex(producto => producto.id == productoAeliminar.id)
        this.listaCarrito.splice(indice, 1)
    }

    guardarEnStorage() {
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem(this.localStorageKey, listaCarritoJSON)
    }

    recuperarStorage() {
        let listaCarritoJSON = localStorage.getItem(this.localStorageKey)
        let listaCarritoJS = JSON.parse(listaCarritoJSON)
        let listaAux = []
        listaCarritoJS.forEach(producto => {
            //(id, nombre, precio, descripcion, img, alt)
            let nuevoProducto = new Producto(producto.id, producto.nombre, producto.precio, producto.descripcion, producto.img, producto.alt, producto.cantidad)
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
        this.eventoAumentarCantidad()
        this.eventoDisminuirCantidad()
        this.mostrarTotal()
    }

    eventoEliminar() {
        this.listaCarrito.forEach(producto => {
            //obtener el id de los botones
            const btn_eliminar = document.getElementById(`ep-${producto.id}`)
            //darle el evento
            btn_eliminar.addEventListener("click", () => {
                //eliminar del carrito
                this.eliminar(producto)
                //actualizar storage
                this.guardarEnStorage()
                //mostrarEnDOM
                this.mostrarEnDOM()
            })
        })
    }

    eventoAumentarCantidad() {
        this.listaCarrito.forEach(producto => {
            //obtener el id de los botones
            const btn_aumentar = document.getElementById(`aumentar-${producto.id}`)
            //darle el evento
            btn_aumentar.addEventListener("click", () => {
                producto.aumentarCantidad()
                this.mostrarEnDOM()
            })
        })
    }

    eventoDisminuirCantidad() {
        this.listaCarrito.forEach(producto => {
            //obtener el id de los botones
            const btn_disminuir = document.getElementById(`disminuir-${producto.id}`)
            //darle el evento
            btn_disminuir.addEventListener("click", () => {
                producto.disminuirCantidad()
                this.mostrarEnDOM()
            })
        })
    }

    trapo() {
        this.listaCarrito = []
    }

    eventoFinalizarCompra() {
        const finalizar_compra = document.getElementById("finalizar_compra")

        finalizar_compra.addEventListener("click", () => {

            if (this.listaCarrito.length > 0) {
                //limpiar el localStorage
                //localStorage.removeItem(this.localStorageKey)
                localStorage.setItem(this.localStorageKey, "[]")
                //limpiar el carrito
                this.trapo()
                //renderizar
                this.mostrarEnDOM()

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Compra realizada con éxito!',
                    timer: 2000
                })
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: '¡Debes añadir productos para poder finalizar una compra!',
                    timer: 3000
                })
            }


        })
    }

    calcularTotal() {
        return this.listaCarrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)
    }
    mostrarTotal() {
        const precio_total = document.getElementById("precio_total")
        precio_total.innerText = `Precio Total: $${this.calcularTotal()}`
    }
}

const CP = new ProductoController()
const carrito = new Carrito()

carrito.recuperarStorage()
carrito.mostrarEnDOM()
carrito.eventoFinalizarCompra()

//CP.cargarProductos()
//CP.mostrarEnDOM()
CP.preparar_contenedor_productos()
CP.eventoFiltro()