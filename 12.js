const cuadrado = function (x) {
    return x * x;
};
let numero = 4;
let numcuad = cuadrado(numero);
console.log(cuadrado(numero));
console.log(numcuad);
const ruido = function () {
    console.log("kataplum!");
}
ruido();
const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
};
let rexp = exponencial(2, 52);
console.log(rexp);
console.log(exponencial(4, 3));
console.log(sumar(5, 65));
function sumar(x, y){
    return x + y;
}
const restar = (a, b) => {
    return a - b;
};
console.log(restar(40, 8));
function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Explorer");
console.log("Adios");
console.log("\n*** Excepciones ***\n");
function preguntadireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error ("Direccion Invalida " + result);
}
function mirar() {
    if (preguntadireccion("¿A que lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos";
    }
}
try {
    console.log("Mira a", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}
console.log("\n*** Asincrono ***\n");
setTimeout(() => console.log("Tick"), 2000);
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
        () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
        2000
    );
  );
async function main() {
    await promesa();
    console.log('Aquí termina la primer promesa');
    await promesa();
    console.log('Aquí termina la segunda promesa');
}
main();
