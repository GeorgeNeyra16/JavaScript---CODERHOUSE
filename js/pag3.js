function renderProducto() {
    const producto = obtenerProductoLS();
    let contenido = `<div class="container d-flex justify-content-center align-items-center mt-5 mb-5">
    <div class="row">
    <div class="col-8 d-flex justify-content-center align-items-center">
    <img class="imgproducto" src="${producto.imagen}" alt="Imagen del producto" width="800">
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center">
    <div class="cuadrodatos p-4">
    <p class="mb-4 h2">${producto.nombre}</p>
    <p>Descripción:
    <ul>
    <li>Excelente material</li>
    <li>Anti-manchas</li>
    <li>No se estira</li>
    </ul>
    </p>
    <br>
    <br>
    <p class="h2">S/. ${producto.precio}.00</p>
    <div class="card-footer d-flex align-items-end pt-3 mb-3 mt-auto">
    <a href="#!" class="btn btn-primary shadow-0 me-1">Añadir al Carrito🛒</a>
    </div>
    </div>
    </div>
    </div>`;
    document.getElementById("cadaProducto").innerHTML = contenido;
}

renderProducto();
