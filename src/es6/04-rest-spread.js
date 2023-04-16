// Arrays destruturing

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a,b);
console.log(a,fruits[1]);

// asignando valores de array a variables
const numeros = [1, 2, 3, 4, 5];
// {indice: variable}
const {3: quinto, 2: cuarto} = numeros;
console.log(quinto, cuarto);


// Object destructuring

let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

// Destructing en parametros de una función
const usuario = {nombre: "Daniel", edad: 23, plataforma: 'Platzi'};

const mostrarDatos = ({nombre, plataforma}) => console.log(`${nombre} estudia en ${plataforma}`);

mostrarDatos(usuario);

// Destructing con el retorno de una función
function numeroAscendente(numero) {
    return [numero,numero+1, numero+2];
}
const [original, masUno, masDos] = numeroAscendente(1);
console.log(original, masUno);
console.log(masDos);

//-------------------------------------------

// Spread operator - Operador de propagación

let person = {name: 'oscar', age: 28};
let country = 'MX';

let data = { id: 1, ...person, country};
console.log(data);

let palabra = [..."Hola"];
console.log(palabra);

// la forma de copiar arrays es:
const originalArray = [1,2,3,4,5]
// crea la copia enn una referencia de memoria diferente al original
// por lo tanto si se modifica la copia, el original no es modificado
const copyArray = [...originalArray];
copyArray[0] = 0;

console.log(originalArray);
console.log(copyArray);
console.log(originalArray === copyArray);
// si se hiciera: copy = original, tendrían la misma referencia de memoria
// por lo tanto al modificar la copia, se modifica también el original


// para unir arrays y añadir elementos
const array1 = [1,2,3];
const number = 4
const array2 = [5,6,7];
const otherArray = [...array1, number, ...array2];
console.log(otherArray);


// cuando hay varios niveles de profundidad se tiene el problema
// de tener la misma referencia de memoria en copias
// para hacer esto es con:
const arrayVariosNiveles = [1, [2,3], 4, 5];
const copiaArrayVariosNiveles = structuredClone(arrayVariosNiveles);

console.log(arrayVariosNiveles === copiaArrayVariosNiveles);
console.log(arrayVariosNiveles[1] === copiaArrayVariosNiveles[1])
//------------------------------------------

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3, 4, 5);

// el parametro rest siempre debe estar en la ultima posición
const objeto = {
    nombre: "Daniel",
    age: 22,
    plataforma: 'Platzi'
};
const arrayNumeros = [0,1,2,3,4,5];

const {plataforma, ...elUsuario} = objeto; // separa el valor de plataforma
const [cero, ...positivos] = arrayNumeros; // separa el valor 0

console.log(elUsuario);
console.log(positivos);

// Diferencias entre spread operator y el parametro rest
const arrayFinal = [1,2,3,4,5]
function hola(primero, segundo, ...resto) { // <- parametro rest
    console.log(primero, segundo); // 1     2
    console.log(resto); // [3,4,5,"final"]
}

hola(...arrayFinal, "final"); // <- spread operator
// es lo mismo que hacer -> hola(1,2,3,4,5,"final")



//------------------------------------------
// Ejercicio
export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado"
    },
    json2 = {
      age: 12,
      color: "Blanco"
    }) {
    return {...json1, ...json2};
}
