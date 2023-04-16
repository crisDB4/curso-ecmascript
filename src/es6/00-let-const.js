var lastName = 'David'; // declarar y asignar
lastName = 'Oscar' // reasignar
console.log(lastName);
// con var es posible re-declarar y re-asignar

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);
// con let se puede reasignar, no se puede redeclarar

const animal = 'Dog'; // declarar y asignar
animal = 'Cat'; // NO se puede reasignar
console.log(animal); // error
// con const no se puede reasinar ni redeclarar

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1); // imprime
    console.log(fruit2); // Error
    console.log(fruit3); // Error
}
fruits();