let nombre = prompt("Ingresar Nombre: ")
// alert("Tu nombre es: "+nombre);

let customer = document.getElementById("customer");
customer.innerHTML= `${nombre.toUpperCase()}`;