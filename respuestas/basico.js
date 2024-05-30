/* Respuesta 1 */
console.log('Hola, mundo!');

/* Respuesta 2 */

let a = 5;
let b = 6;

let op1 = a + b;
let op2 = a * b;

console.log(op1)
console.log(op2)

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)


/* Respuesta 3 */

function sumar(num1, num2){
    return num1 + num2
}

console.log(sumar(5, 7))
console.log(sumar(a, b))

/* Respuesta 4 */
let open = false;
if(open){
    console.log("Abierto")
} else {
    console.log("Cerrado")
}

let result = open ? "Abierto" : "Cerrado"
console.log(result)

/* Respuesta 5 */

const colores = ["Black", "White", "Red", "Green", "Blue", "Violet", "Pink"]

/* Respuesta 6 */
const operacion = function(num){
    return num * num
}
const cuadrado = num => num * num;
const squart = num => num**2;

console.log(cuadrado(9)) // 81
console.log(cuadrado(7)) // 49
console.log(squart(10)) // 100

/* Respuesta  7 */
let informacion = {
    nombre: 'John Doe',
    edad: undefined,
    ciudad: 'L.A'
}

console.log(informacion)

/* Respuesta 8 */




/* Respuesta 9 */
//const unir = (valor1, valor2) => valor1 + valor2;
const unir = (valor1, valor2) => `${valor1}${valor2}`

console.log(unir("Hola", "Mundo"))
console.log(unir(10,30))
console.log(unir("lrodriguez", 81))

/* Respuesta 10 */


/* Respuesta 11 */

let numero = -0;

if(numero > 0){
    console.log("POSITIVO")
} else if (numero < 0){
    console.log("NEGATIVO")
} else if (numero === 0){
    console.log("CERO")
}