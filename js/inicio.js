// let nombre = prompt("Ingresar Nombre: ")
// alert("Tu nombre es: "+nombre);

// let customer = document.getElementById("customer");
// customer.innerHTML= `${nombre.toUpperCase()}`;

//APLICANDO ONCLICK AL BOLETIN
let boletin = document.getElementById("prueba");

boletin.addEventListener("click", () => {
    alert("Lo sentimos mucho, aún no tenemos disponible nuestro boletín😥")
});

//----------------------------------------
function productosHtml() {
    // const productos = obtenerProductosLocalStrge(); 
    const products = obtenerProductosLocalStrge();
    let contenido = "";
    
    for (const producto of products) {
        contenido += `<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div class="card w-100 my-2 shadow-2-strong">
        <a href="./producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="aspect-ratio: 1 / 1" />
        </a>
        <div class="card-body d-flex flex-column">
        <h5 id="card-title" class="card-title">Lanyard - AIR TRAFFIC CONTROLLER - NEGRO</h5>
        <p class="card-text">S/. ${producto.precio}.00</p>
        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
        <a href="#!" class="btn btn-primary shadow-0 me-1">Añadir al Carrito🛒</a>
        </div>
        </div>
        </div>
        </div>`
    }
    document.getElementById("productoscambio").innerHTML = contenido;
}
productosHtml();

