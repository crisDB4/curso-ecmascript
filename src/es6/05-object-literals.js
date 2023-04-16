// enhaced object literals

// normalmente para crear y retornar un objeto de una función:
function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country
    }
}
console.log(newUser("Daniel", 22, 'CO'));

// con la mejora:
// si el nombre de los parámetros es el mismo identificador
// de las propiedades del objeto, se deja solo el nombre 
function nuevoUser(user, age,country, uId) {
    return {
        user,
        age,
        country,
        id: uId // como el parametro es diferente, si se asigna
    }
}
console.log(nuevoUser("Daniel", 22, 'CO', 12));