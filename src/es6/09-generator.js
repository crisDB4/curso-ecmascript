function* iterate(array) { 
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar','Ana','Ulises','Jennifer']);
console.log(it.next().value); // Oscar
console.log(it.next().value); // Ana
console.log(it.next().value); // Ulises
console.log(it.next().value); // Jennifer
console.log(it.next().value); // undefined
console.log(it.next()); // { value: undefined, done: true}

//-----------
// EJEMPLO
// se obtener un id diferente para cada registro nuevo de usuarios
function* idGenerator() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

const newID = idGenerator();
console.log(newID.next().value); //0
console.log(newID.next().value); //1
console.log(newID.next().value); //2
console.log(newID.next().value); //3
console.log(newID.next().value); //4

