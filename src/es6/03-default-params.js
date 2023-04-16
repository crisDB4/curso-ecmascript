function newUser(name, age, country) {
    // variable = argumento || parametro_por_defecto
    var name = name || 'Oscar'; 
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();
newUser('David',15,'CO');

// ES6 permite asignar el parámetro por defecto mas fácil
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('David',16,'CO');

// funciona igual en arrow functions
const nueva = (num1,num2 = 0,num3 = 0) => num1 + num2 + num3;
console.log(nueva(1));