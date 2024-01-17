//Bienvenida y consulta del nombre
let nombre
let email
let edad
let producto
let marca
let color

nombre = prompt("Bienvenido a la plataforma de UMBRAL'98✈️, somos los especialistas en brindarte los mejores productos personalizados con temática aeronáutica! \n\nPorfavor indicanos tu nombre👨‍✈️:")

email = prompt("Brindanos tu e-mail, así te podremos enviar el catálogo de los productos de interés👨‍✈️:")

// if (edad > 0 && edad < 18){
//     alert("Lo siento " + nombre + ", eres menor de edad,  tienes que volver con un adulto😥, Te esperamos!✈️")
// } else if (edad === " " || edad <= 0) {
//     alert("Lo siento " + nombre + ", indicaste una edad que no es valida😥, intentalo de nuevo!")
//     alert(edad)
// }else {
//     alert("Bienvenido " + nombre + "🤗, sabemos que buscas el mejor producto personalizado pero ayudamos siendo un poco más específico, ¿Qué buscas?")
// }


// Bucle para pedir la edad hasta que se ingrese un número válido

while (true) {
    let consultaEdad = parseInt(prompt("Cual es tu edad " + nombre + "? 😁✌"))

    if (consultaEdad !== "") {
        if (consultaEdad >= 18){
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
        consultaEdad = parseInt(prompt("Cual es tu edad " + nombre + "? 😁✌"));
    }
}




// while (true) {
//     // Pregunta la edad al usuario
//     let input = prompt("Cual es tu edad " + nombre + "? 😁✌");
    

//     // Verifica si se ingresó una edad
//     if (input !== null) {
//         // Convierte la entrada a un número
//         var edad = parseInt(input);

//         // Verifica si la conversión fue exitosa y la edad es un número válido
//         if (edad > 0) {
//             // Verifica las condiciones de ingreso
//             if (edad >= 18) {
//                 alert("Bienvenido " + nombre + "🤗");
                
//                 let consultaProducto = prompt("Sabemos que buscas el mejor producto personalizado pero ayúdanos siendo un poco más específico, ¿Qué buscas? (Indicar un número): \n1. Tazas \n2. Polos \n3. Cuadros \n4. Pines \n5. Pulseras \n6. Lanyards")

//                 while (true){
//                     if (consultaProducto !== ""){
//                         while (true) {
//                             if (consultaProducto === "1"){
//                                 producto = "Tazas"
//                                 break
//                             } else if (consultaProducto === "2"){
//                                 producto = "Polos"
//                                 break
//                             } else if (consultaProducto === "3"){
//                                 producto = "Cuadros"
//                                 break
//                             } else if (consultaProducto === "4"){
//                                 producto = "Pines"
//                                 break
//                             } else if (consultaProducto === "5"){
//                                 producto = "Pulseras"
//                                 break
//                             } else if (consultaProducto === "6"){
//                                 producto = "Lanyards"
//                                 break
//                             } else {
//                                 alert("Ingresaste una opción que no es valida😥, intentalo de nuevo!")
//                                 consultaProducto = prompt("Sabemos que buscas el mejor producto personalizado pero ayúdanos siendo un poco más específico, ¿Qué buscas? (Indicar un número): \n1. Tazas \n2. Polos \n3. Cuadros \n4. Pines \n5. Pulseras \n6. Lanyards")
//                             }
//                         }
//                         break;
//                     } else {
//                         alert("No ingresaste ninguna opción😥, intentalo de nuevo!")
//                         consultaProducto = prompt("Sabemos que buscas el mejor producto personalizado pero ayúdanos siendo un poco más específico, ¿Qué buscas? (Indicar un número): \n1. Tazas \n2. Polos \n3. Cuadros \n4. Pines \n5. Pulseras \n6. Lanyards")
//                     }
//                 }
//             }
//         } else {
//                 alert("Lo siento " + nombre + ", eres menor de edad,  tienes que volver con un adulto😥, Te esperamos!✈️");
//         }
//     break; // Sale del bucle después de procesar la entrada
//     } else if (edad < 0 || edad === 0){
//         alert("Lo siento " + nombre + ", indicaste una edad que no es valida😥, intentalo de nuevo!");
//         input = prompt("Cual es tu edad " + nombre + "? 😁✌");
//     } else {
//         alert("Lo siento " + nombre + ", no ingresaste ninguna edad😥, intentalo de nuevo!");
//         input = prompt("Cual es tu edad " + nombre + "? 😁✌");
//     }
// } 



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
let delivery = 10

let consultaDelivery = prompt(`Por ultimo ${nombre}. Deseas que te llevemos el producto a tu domicilio? El precio del delívery es 10 soles.? (Indicar un número): \n1. SI \n2. NO`)

while (true) {
    if (consultaDelivery !== "") {
        while(true){

            function servDeliv(){
            let suma = precioProducto + delivery
            return suma
            }
            let sumaFinal = servDeliv(); 

            if (consultaDelivery === "1"){
                alert(`Perfecto, como resumen tenemos: \nEscogiste ${producto} como producto y que sea de la marca ${marca} y, además que sea de color ${color}. El monto final con Delivery incluído es de ${sumaFinal} soles. Te estaremos enviando el catálogo de los productos solicitados al siguiente correo: ${email}.`)
                break
            } else if (consultaDelivery === "2"){
                alert(`Perfecto, como resumen tenemos: \nEscogiste ${producto} como producto y que sea de la marca ${marca} y, además que sea de color ${color}. El monto final sin Delivery es de ${precioProducto}. Te estaremos enviando el catálogo de los productos solicitados al siguiente correo: ${email}.`)
                break
            } else {
                alert("Ingresaste una opción que no es valida😥, intentalo de nuevo!")
                consultaDelivery = prompt(`Por ultimo ${nombre}. Deseas que te llevemos el producto a tu domicilio? El precio del delívery es 10 soles.? (Indicar un número): \n1. SI \n2. NO`)
            }
        }
    break;
    } else {
        alert("No ingresaste ninguna opción😥, intentalo de nuevo!")
        consultaDelivery = prompt(`Por ultimo ${nombre}. Deseas que te llevemos el producto a tu domicilio? El precio del delívery es 10 soles.? (Indicar un número): \n1. SI \n2. NO`)
    }
}




 
