const products = [
    {id:1, producto:"LANYARD", marca:"BOEING", color:"AZUL", nombre:"LANYARD - BOEING 737 747 767 777 - NEGRO", imagen:"./imagenes/L1.webp", precio:30},
    {id:2, producto:"LANYARD", marca:"BOEING", color:"AZUL", nombre:"LANYARD - BOEING - AZUL", imagen:"./imagenes/L2.webp", precio:28},
    {id:3, producto:"LANYARD", marca:"BOEING", color:"AZUL", nombre:"LANYARD - BOEING - AZUL", imagen:"./imagenes/L3.webp", precio:25},
    {id:4, producto:"LANYARD", marca:"BORN TO FLY", color:"ROSADO", nombre:"Lanyard - BORN TO FLY - ROSA", imagen:"./imagenes/L4.webp", precio:20},
    {id:5, producto:"LANYARD", marca:"REMOVE BEFORE FLIGHT", color:"ROJO", nombre:"Lanyard - REMOVE BEFORE FLIGHT - ROJO", imagen:"./imagenes/L5.webp", precio:18},
    {id:6, producto:"LANYARD", marca:"AIRBUS", color:"NEGRO", nombre:"Lanyard - AIRBUS - NEGRO", imagen:"./imagenes/L6.webp", precio:35},
    {id:7, producto:"LANYARD", marca:"AIRBUS", color:"AZUL", nombre:"Lanyard - AIRBUS - AZUL", imagen:"./imagenes/L7.webp", precio:30},
    {id:8, producto:"LANYARD", marca:"CESSNA", color:"NEGRO", nombre:"Lanyard - CESSNA - NEGRO", imagen:"./imagenes/L8.webp", precio:20},
    {id:9, producto:"LANYARD", marca:"ATC", color:"NEGRO", nombre:"Lanyard - AIR TRAFFIC CONTROLLER - NEGRO", imagen:"./imagenes/L9.webp", precio:28},
    {id:10, producto:"LANYARD", marca:"ATC", color:"ROJO", nombre:"Lanyard - AIR TRAFFIC CONTROLLER - ROJO", imagen:"./imagenes/L10.webp", precio:28}
];
// function productos(id, producto, marca, color, nombre, imagen, precio) {
//     this.id = id;
//     this.producto = producto.toUpperCase();
//     this.marca = marca.toUpperCase();
//     this.color = color.toUpperCase();
//     this.nombre = nombre;
//     this.imagen = imagen;
//     this.precio = precio;

// }

// const producto1 = new productos(1,"LANYARD","BOEING","AZUL","LANYARD - BOEING 737 747 767 777 - NEGRO" ,"./imagenes/L1.webp",30);
// const producto2 = new productos(2, "LANYARD", "BOEING", "AZUL", "LANYARD - BOEING - AZUL", "./imagenes/L2.webp",28);
// const producto3 = new productos(3, "LANYARD", "BOEING", "AZUL","LANYARD - BOEING - AZUL", "./imagenes/L3.webp",25);
// const producto4 = new productos(4, "LANYARD", "BORN TO FLY", "ROSADO","Lanyard - BORN TO FLY - ROSA" , "./imagenes/L4.webp",20);
// const producto5 = new productos(5, "LANYARD", "REMOVE BEFORE FLIGHT","ROJO", "Lanyard - REMOVE BEFORE FLIGHT - ROJO", "./imagenes/L5.webp",18);
// const producto6 = new productos(6, "LANYARD", "AIRBUS", "NEGRO","Lanyard - AIRBUS - NEGRO" , "./imagenes/L6.webp",35);
// const producto7 = new productos(7, "LANYARD", "AIRBUS", "AZUL","Lanyard - AIRBUS - AZUL" , "./imagenes/L7.webp",30);
// const producto8 = new productos(8, "LANYARD", "CESSNA", "NEGRO","Lanyard - CESSNA - NEGRO" , "./imagenes/L8.webp",20);
// const producto9 = new productos(9, "LANYARD", "ATC", "NEGRO","Lanyard - AIR TRAFFIC CONTROLLER - NEGRO" , "./imagenes/L9.webp",28);
// const producto10 = new productos(10, "LANYARD", "ATC", "ROJO","Lanyard - AIR TRAFFIC CONTROLLER - ROJO" , "./imagenes/L10.webp",28);


// let products = []

// products.push(producto1);
// products.push(producto2);
// products.push(producto3);
// products.push(producto4);
// products.push(producto5);
// products.push(producto6);
// products.push(producto7);
// products.push(producto8);
// products.push(producto9);
// products.push(producto10);

// console.log(products);

//------------------------------------------------------------------
//INTRODUCIENDO EL ARREGLO DE PRODUCTOS EN LA LOCAL STORAGE
const productosLocalStrge = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
}

const obtenerProductosLocalStrge = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
}

const carritoLocalStrge = (products) => {
    localStorage.setItem("carrito", JSON.stringify(products));
}

const obtenerCarritoLocalStrge = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerIdLocalStrge = () => {
    return JSON.parse(localStorage.getItem("product")) || 0;
}

const cantTotalProductos = () => {
    const carrito = obtenerCarritoLocalStrge();
    
    return carrito.length;
}

const renderTotalCarrito = () => {
    document.getElementById("productsCarrito").innerHTML = cantTotalProductos();
}

const verProducto = (id) => {
    localStorage.setItem("product", JSON.stringify(id));
}

const obtenerProductoLS = () => {
    const products = obtenerProductosLocalStrge();
    const id = obtenerIdLocalStrge();
    const product = products.find(item => item.id === id);
        
    return product;
}

productosLocalStrge(products);
