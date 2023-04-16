/*
Objeto que por dentro tiene la representación llave: valor
y ese llave-valor puede ser otro objeto y cuando se quiere
acceder a ese objeto pueden existir errores
*/

const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.gndx.country);
console.log(users.gndx.age); // undefined
console.log(users.gndx);
// console.log(users.bebeloper.country); // TypeError
//optional chaining
console.log(users.bebeloper?.country); // undefined -> si no existe devuelve undefined
