//Bienvenida y consulta del nombre
let nombre
let email
let edad
let producto
let marca
let color

nombre = prompt("Bienvenido a la plataforma de UMBRAL'98✈️, somos los especialistas en brindarte los mejores productos personalizados con temática aeronáutica! \n\nPorfavor indicanos tu nombre👨‍✈️:")

email = prompt("Brindanos tu e-mail, así te podremos enviar el catálogo de los productos de interés👨‍✈️:")

while (true) {
    edad = parseInt(prompt("Cual es tu edad " + nombre + "? 😁✌"))
    
    if (edad !== "") {
        if (edad >= 18){
            alert("Bienvenido " + nombre + "🤗");
            
            let consultaProducto = prompt("Sabemos que buscas el mejor producto personalizado pero ayúdanos siendo un poco más específico, ¿Qué buscas? (Indicar un número): \n1. Tazas \n2. Polos \n3. Cuadros \n4. Pines \n5. Pulseras \n6. Lanyards")
            
            while (true){
                if (consultaProducto !== ""){
                    while (true) {
                        if (consultaProducto === "1"){
                            producto = "Tazas"
                            break
                        } else if (consultaProducto === "2"){
                            producto = "Polos"
                            break
                        } else if (consultaProducto === "3"){
                            producto = "Cuadros"
                            break
                        } else if (consultaProducto === "4"){
                            producto = "Pines"
                            break
                        } else if (consultaProducto === "5"){
                            producto = "Pulseras"
                            break
                        } else if (consultaProducto === "6"){
                            producto = "Lanyards"
                            break
                        } else {
                            alert("Ingresaste una opción que no es valida😥, intentalo de nuevo!")
                            consultaProducto = prompt("Sabemos que buscas el mejor producto personalizado pero ayúdanos siendo un poco más específico, ¿Qué buscas? (Indicar un número): \n1. Tazas \n2. Polos \n3. Cuadros \n4. Pines \n5. Pulseras \n6. Lanyards")
                        }
                    }
                    break;
                } else {
                    alert("No ingresaste ninguna opción😥, intentalo de nuevo!")
                    consultaProducto = prompt("Sabemos que buscas el mejor producto personalizado pero ayúdanos siendo un poco más específico, ¿Qué buscas? (Indicar un número): \n1. Tazas \n2. Polos \n3. Cuadros \n4. Pines \n5. Pulseras \n6. Lanyards")
                }
            }
        }
        break;
        
    } else {
        alert("Lo siento " + nombre + ", indicaste una edad que no es valida😥, intentalo de nuevo!");
        edad = parseInt(prompt("Cual es tu edad " + nombre + "? 😁✌"));
    }
}


let consultaMarca = prompt("Ahora por favor ayúdanos eligiendo una marca en específico (Indicar un número): \n1. BOEING \n2. AIRBUS \n3. CESSNA \n4. LAN \n5. LATAM \n6. JETSMART \n7. VIVA \n8. Sin Marca")

while (true) {
    if (consultaMarca !== "") {
        while(true){
            
            if (consultaMarca === "1"){
                marca = "BOEING"
                break
            } else if (consultaMarca === "2"){
                marca = "AIRBUS"
                break
            } else if (consultaMarca === "3"){
                marca = "CESSNA"
                break
            } else if (consultaMarca === "4"){
                marca = "LAN"
                break
            } else if (consultaMarca === "5"){
                marca = "LATAM"
                break
            } else if (consultaMarca === "6"){
                marca = "JETSMART"
                break
            } else if (consultaMarca === "7"){
                marca = "VIVA"
                break
            } else if (consultaMarca === "8"){
                marca = "Sin Marca"
                break
            } else {
                alert("Ingresaste una opción que no es valida😥, intentalo de nuevo!");
                consultaMarca = prompt("Ahora por favor ayúdanos eligiendo una marca en específico (Indicar un número): \n1. BOEING \n2. AIRBUS \n3. CESSNA \n4. LAN \n5. LATAM \n6. JETSMART \n7. VIVA \n8. Sin Marca");
            }
        }
    break;
    } else {
        alert("No ingresaste ninguna opción😥, intentalo de nuevo!")
        consultaMarca = prompt("Ahora por favor ayúdanos eligiendo una marca en específico (Indicar un número): \n1. BOEING \n2. AIRBUS \n3. CESSNA \n4. LAN \n5. LATAM \n6. JETSMART \n7. VIVA \n8. Sin Marca")  
    }
}

let consultaColor = prompt("Algún color en especial? (Indicar un número): \n1. NEGRO \n2. BLANCO \n3. ROJO \n4. VERDE \n5. AMARILLO \n6. AZUL");

while (true) {
    if (consultaColor !== "") {
        while(true){
            
            if (consultaColor === "1"){
                color = "NEGRO"
                break
            } else if (consultaColor === "2"){
                color = "BLANCO"
                break
            } else if (consultaColor === "3"){
                color = "ROJO"
                break
            } else if (consultaColor === "4"){
                color = "VERDE"
                break
            } else if (consultaColor === "5"){
                color = "AMARILLO"
                break
            } else if (consultaColor === "6"){
                color = "AZUL"
                break
            } else {
                alert("Ingresaste una opción que no es valida😥, intentalo de nuevo!")
                consultaColor = prompt("Algún color en especial? (Indicar un número): \n1. NEGRO \n2. BLANCO \n3. ROJO \n4. VERDE \n5. AMARILLO \n6. AZUL")
            }
        }
    break;
    } else {
        alert("No ingresaste ninguna opción😥, intentalo de nuevo!")
        consultaColor = prompt("Algún color en especial? (Indicar un número): \n1. NEGRO \n2. BLANCO \n3. ROJO \n4. VERDE \n5. AMARILLO \n6. AZUL")
    }
}

let precioProducto = 50;
let precioDelivery = 10

let delivery = prompt(`Por ultimo ${nombre}. Deseas que te llevemos el producto a tu domicilio? El precio del delívery es 10 soles.? (Indicar un número): \n1. SI \n2. NO`)

while (true) {
    if (delivery !== "") {
        while(true){

            function servDeliv(){
            let suma = precioProducto + precioDelivery
            return suma
            }
            let sumaFinal = servDeliv(); 

            if (delivery === "1"){
                delivery = 1;
                alert(`Perfecto, como resumen tenemos: \nEscogiste ${producto} como producto y que sea de la marca ${marca} y, además que sea de color ${color}. El monto final con Delivery incluído es de ${sumaFinal} soles. Te estaremos enviando el catálogo de los productos solicitados al siguiente correo: ${email}.`)
                break
            } else if (delivery === "2"){
                delivery = 2;
                alert(`Perfecto, como resumen tenemos: \nEscogiste ${producto} como producto y que sea de la marca ${marca} y, además que sea de color ${color}. El monto final sin Delivery es de ${precioProducto}. Te estaremos enviando el catálogo de los productos solicitados al siguiente correo: ${email}.`)
                break
            } else {
                alert("Ingresaste una opción que no es valida😥, intentalo de nuevo!")
                delivery = prompt(`Por ultimo ${nombre}. Deseas que te llevemos el producto a tu domicilio? El precio del delívery es 10 soles.? (Indicar un número): \n1. SI \n2. NO`)
            }
        }
    break;
    } else {
        alert("No ingresaste ninguna opción😥, intentalo de nuevo!")
        delivery = prompt(`Por ultimo ${nombre}. Deseas que te llevemos el producto a tu domicilio? El precio del delívery es 10 soles.? (Indicar un número): \n1. SI \n2. NO`)
    }
}

//Creando un Objeto por pedido

// const cliente = {
//     name: nombre,
//     mail: email,
//     age: edad,
// }
// const pedido = {
//     product: producto,
//     brand: marca,
//     color: color,
//     delivery:delivery,
// }

//  console.log(cliente);


//Creando un Objeto por funcion

function cliente(nombre, email, edad) {
    this.nombre = nombre.toUpperCase();
    this.email = email;
    this.edad = edad;
}

function pedido(producto, marca, color, sumaFinal){
    this.producto = producto;
    this.marca = marca;
    this.color = color;
    this.delivery = sumaFinal
}

const cliente1 = new cliente(nombre, email,edad);

const pedido1 = new pedido(producto, marca, color,servDeliv());

console.log(cliente1);
console.log(pedido1);