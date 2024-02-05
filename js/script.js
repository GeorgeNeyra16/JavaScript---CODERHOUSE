// const productos = [
//     {id:"L1", producto:"LANYARD", marca:"BOEING", color:"AZUL", precio:30},
//     {id:"L2", producto:"LANYARD", marca:"BOEING", color:"AZUL", precio:28},
//     {id:"L3", producto:"LANYARD", marca:"BOEING", color:"AZUL", precio:25},
//     {id:"L4", producto:"LANYARD", marca:"BORN TO FLY", color:"ROSADO", precio:20},
//     {id:"L5", producto:"LANYARD", marca:"REMOVE BEFORE FLIGHT", color:"ROJO", precio:18},
//     {id:"L6", producto:"LANYARD", marca:"AIRBUS", color:"NEGRO", precio:35},
//     {id:"L7", producto:"LANYARD", marca:"AIRBUS", color:"AZUL", precio:30},
//     {id:"L8", producto:"LANYARD", marca:"CESSNA", color:"NEGRO", precio:20},
//     {id:"L9", producto:"LANYARD", marca:"ATC", color:"NEGRO", precio:28},
//     {id:"L10", producto:"LANYARD", marca:"ATC", color:"ROJO", precio:28},
// ]
//------------------------PRODUCTOS-----------------------
function productos(id, producto, marca, color, precio) {
    this.id = id;
    this.producto = producto.toUpperCase();
    this.marca = marca.toUpperCase();
    this.color = color.toUpperCase();
    this.precio = precio;

}

const producto1 = new productos(1,"LANYARD","BOEING","AZUL",30);
const producto2 = new productos(2, "LANYARD", "BOEING", "AZUL", 28);
const producto3 = new productos(3, "LANYARD", "BOEING", "AZUL", 25);
const producto4 = new productos(4, "LANYARD", "BORN TO FLY", "ROSADO", 20);
const producto5 = new productos(5, "LANYARD", "REMOVE BEFORE FLIGHT", "ROJO", 18);
const producto6 = new productos(6, "LANYARD", "AIRBUS", "NEGRO", 35);
const producto7 = new productos(7, "LANYARD", "AIRBUS", "AZUL", 30);
const producto8 = new productos(8, "LANYARD", "CESSNA", "NEGRO", 20);
const producto9 = new productos(9, "LANYARD", "ATC", "NEGRO", 28);
const producto10 = new productos(10, "LANYARD", "ATC", "ROJO", 28);


let products = []

products.push(producto1);
products.push(producto2);
products.push(producto3);
products.push(producto4);
products.push(producto5);
products.push(producto6);
products.push(producto7);
products.push(producto8);
products.push(producto9);
products.push(producto10);

console.log(products);
//-----------------------------------------------------------

//definiento el CARRITO

class Canasta {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.totalPagar = 0;
    }

    agregarProducto(id) {
        let producto = products.find(prod => prod.id === id);

        if(producto) {
            this.productos.push(producto);
            console.log("Acabas de agregar el producto #" + id + " a la Canasta");
        } else {
            console.log("Lo siento, no encontramos ese producto😥.")
        }
    }

    listarCanasta() {
        let salida = "";
        
        this.productos.forEach( item => {
            salida += "ID: "+ item.id + " y cuesta S/." + item.precio + "\n";
        })
    
        return salida;
    }
    //----

    calcularTotalProductos() {
        return this.productos.length;
    }

    aplicarDescuento() {
        if (this.calcularTotalProductos() >= 2) {
            return Math.round((this.calcularTotalPagar() * this.descuento)/100)
        } else {
            return 0;
        }
    }

    calcularTotalPagar() {
        let total = 0;
        
        this.productos.forEach(item => {
            total += item.precio;
        });
        return total;
        }
}

function listarProductos() {
    let salida = "";
    
    products.forEach(item => {
        salida += item.id + " - " + item.producto + " - " + item.marca + " - " + item.color + " - S/." + item.precio + "\n";
    })

    return salida;
}

//Ejecuto el programa
const canasta = new Canasta();

let opcionSeleccionada = 15;

let nombre = prompt("Bienvenido a la plataforma de UMBRAL'98✈️, somos los especialistas en brindarte los mejores productos personalizados con temática aeronáutica! \n\nPorfavor indicanos tu nombre👨‍✈️:")

alert("Encantados de tenerte con nosotros " + nombre.toUpperCase() + "🤗");

while (opcionSeleccionada != 0) {

    opcionSeleccionada = parseInt(prompt("CATALOGO DE PRODUCTOS UMBRAL'98👨‍✈️✌.\n Seleccionar el producto a agregar a la Canasta: \n(Pulsa 0 para Salir) \n\n" + listarProductos()))

    if (opcionSeleccionada == 0) {
        break;
    }


    canasta.agregarProducto(opcionSeleccionada);
}

let productosCanasta = "Hola de nuevo " + nombre.toUpperCase() + ", estos son los detalles de todo tu pedido😉: \n\n" + canasta.listarCanasta();
let salidaSubTotal = "💠Subtotal: S/." + canasta.calcularTotalPagar();
let salidaDescuento = "💥Descuento:  S/." + canasta.aplicarDescuento();
let montoFinal = "✅Total: S/." + Math.round(canasta.calcularTotalPagar() - canasta.aplicarDescuento());

alert(productosCanasta + "\n\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);