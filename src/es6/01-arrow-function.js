function square(num) {
    return num * num;
}

//Arrow function
// sintaxis más amigable, mas sencilla
// se puede hacer uso de las palabras reservadas: var, let y const
// se recomienda hacer con const

const square = (num) => {
    return num * num;
}
console.log(square(3));

//se puede reducir el código
const square = num => num * num; // no hay necesidad de return, ni (), ni {}
console.log(square(3));

const multiplication = (num1, num2) => num1 * num2;
console.log(multiplication(2,3));


