console.log("\n*** Variables ***\n");
/* var es una variable global y let es una variable local o temporal */
var numero1 = 4;
let numero2 = 6;
const numero3 = 3;
console.log("Número 1: " + numero1 + " Numero 2: " + numero2);
console.log("\n*** Cadenas ***\n");
var frase1 = "Ejemplo comillas dobles.";
let frase2 = 'Ejemplo comillas simples.';
var frase3 = `Ejemplo comillas ${numero1} invertidas.`;
console.log(frase1 + "\n" + frase2 + "\n" + frase3);
console.log("\n*** Condicionales ***\n");
console.log(numero1 != numero2);
console.log(numero1 > numero3);
console.log(numero2 === numero3);
console.log("\n*** Operador Lógico AND ***\n");
console.log(true && true);
console.log(numero1 == numero2 && numero1 < numero2);
console.log("\n*** Operador Lógico OR ***\n");
console.log(false || true);
console.log(numero2 > numero1 || numero3 != numero3);
console.log("\n*** Arreglos ***\n");
let ListadeNumeros = [2, 3, 5, 7, 11, 13, 17];
console.log(ListadeNumeros[5]);
/* El .push agrega numero elementos a la cadena y el .pop quita el ultimo numero de la cadena*/
ListadeNumeros.push(19);
ListadeNumeros.push(23);
console.log(ListadeNumeros);
console.log(ListadeNumeros.length);
ListadeNumeros.pop();
console.log(ListadeNumeros);
console.log(ListadeNumeros.length);
let ListadePalabras = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log(ListadePalabras);
console.log(ListadePalabras.length);
let palabra = "Parangaricutirimicuaro";
console.log(palabra[11]);
console.log(palabra.length);
console.log("\n*** Objetos ***\n");
let explorer = {
    nombre: "Nombre de Pila",
    email: "email@innovaccion.mx",
    id: 0123456789,
    mision: "FrontEnd",
    proyectos: ["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4", "Proyecto 5"],
    personales: {
        proyecto1: "Proyecto Personal 1",
        proyecto2: "Proyecto Personal 2",
        proyecto3: "Proyecto Personal 3",
    },
};
console.log(explorer);
console.log(explorer.id);
console.log(explorer.personales.proyecto1);
console.log("Proyecto: " + explorer.personales.proyecto2);
console.log("\n*** Flujo Condicional ***\n");
let number1 = 6;
let number2 = 6;
console.log("\n if / else\n");
if (number1 > number2 && number1 > 3) {
    console.log("El numero 1 es mayor que el numero 2");
} else if (number1 == number2) {
    console.log("Los numeros son iguales");
} else {
    console.log("El numero 2 es mayor que el numero 1");
}
/* Ciclo Condicional */
console.log("\n*** While ***\n")
let numberwhile = 5;
while (numberwhile <= 12) {
    console.log(numberwhile);
    numberwhile += 2;
    /* numberwhile = numberwhile + 2 */
}
console.log("Aquí ya salió del while " + numberwhile);
console.log("\n*** Do While ***\n");
let numberdowhile = 12;
do {
    numberdowhile += 2;
    console.log(numberdowhile);
} while (numberdowhile < 20);
console.log("Aqui salimos del Dohile " + numberdowhile);
console.log("\n*** Ciclo for Con Iteración Controlada ***\n");
console.log("\n*** For ***\n");
let numberfor = 0;
for (numberfor ; numberfor <= 12; numberfor += 1) {
    console.log(numberfor);
}
console.log("Aquí salimos del for " + numberfor);
console.log("\n*** Opciones para evitar anidar condicionales ***\n")
console.log("\n*** Switch ***\n")
switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte Bloqueador");
        break;
    case "nublado":
        console.log("Abrigate bien");
        break
    default:
        console.log("No se como esta el clima");
        break;
}
console.log("Aquí salimos del switch")