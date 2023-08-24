const contenedor_productos = document.getElementById("contenedor_productos")

const listaProductos = [
                    { id: 1,  nombre: "Arroz", precio: 125, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_1280.jpg", alt:"imagen arroz" },
                    {  id: 2,  nombre: "Fideo", precio: 70, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg", alt:"imagen fideo" },
                    {  id: 3,  nombre: "Pan"  , precio: 50, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2017/07/23/18/23/bread-2532192_1280.jpg", alt:"imagen pan"},
                    {  id: 4,  nombre: "Flan" , precio: 100, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2014/08/08/11/22/flan-413219_1280.jpg", alt:"imagen flan"},
                    { id: 5,  nombre: "Arroz", precio: 125, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_1280.jpg", alt:"imagen arroz" },
                    {  id: 6,  nombre: "Fideo", precio: 70, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg", alt:"imagen fideo" },
                    {  id: 7,  nombre: "Pan"  , precio: 50, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2017/07/23/18/23/bread-2532192_1280.jpg", alt:"imagen pan"},
                    {  id: 8,  nombre: "Flan" , precio: 100, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2014/08/08/11/22/flan-413219_1280.jpg", alt:"imagen flan"},
                    { id: 9,  nombre: "Arroz", precio: 125, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_1280.jpg", alt:"imagen arroz" },
                    {  id: 10,  nombre: "Fideo", precio: 70, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg", alt:"imagen fideo" },
                    {  id: 11,  nombre: "Pan"  , precio: 50, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2017/07/23/18/23/bread-2532192_1280.jpg", alt:"imagen pan"},
                    {  id: 12,  nombre: "Flan" , precio: 100, descripcion:"para comer", img:"https://cdn.pixabay.com/photo/2014/08/08/11/22/flan-413219_1280.jpg", alt:"imagen flan"}
                ];



listaProductos.forEach(producto => {
    contenedor_productos.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
<div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text">${producto.descripcion}</p>
  <p class="card-text">$${producto.precio}</p>
  <a href="#" class="btn btn-primary">Añadir al carrito</a>
</div>
</div>`
});
