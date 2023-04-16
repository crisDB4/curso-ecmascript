// Estructura de datos para almacenar elementos únicos,
// es decir, sin elementos repetidos
const list = new Set();

list.add('item 1'); // añade 'item 1'
list.add('item 2').add('item 3'); // añade 'item 2' e 'item 3'
list.add('item 4'); // añade 'item 4'
list.add('item 1'); // no añade 'item 1' porque ya está
list.add('item 5').add('item 2'); // añade 'item 5' pero no 'item 2'
list.add('item 2').add('item 6'); // añade 'item 6' pero no 'item 2'

console.log(list);

//-----------------
// el iterable que se envía al Set puede ser una lista
let myList = [1,2,3,4,5]
const newList = new Set(myList);

newList.add('item 1'); // añade 'item 1'
newList.add('item 2').add('item 3'); // añade 'item 2' e 'item 3'
newList.add('item 4'); // añade 'item 4'
newList.add('item 1'); // no añade 'item 1' porque ya está
newList.add('item 5').add('item 2'); // añade 'item 5' pero no 'item 2'
newList.add('item 2').add('item 6'); // añade 'item 6' pero no 'item 2'

console.log(newList);

newList.delete('item 1');
console.log(newList);

console.log(newList.has('item 2'));

console.log(newList.size);

newList.clear();
console.log(newList);

// Ejemplo de uso: crear un array sin elementos repetidos
const repetidosArray = [1, 1, 2, 2, 3, 4, 4, 5];
const sinRepetidos = [...new Set(repetidosArray)]; // utiliza el spread operator
console.log(sinRepetidos)


