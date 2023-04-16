let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// Template literals
let epicPhrase2 = `${hello}, ${world}!`; // ` ` comillas francesas
console.log(epicPhrase2);

// Multi-line strings
//Antes tocaba usar \n
let lorem = 'esto es un string \n '+ 'esto es otra linea'; // salto de linea

//En ES6 se puede hacer el salto de linea con las comillas francesas
// hace uso de los templates literals
let lorem2 = `Esta es una frase epica
la continuación de esa frase epica.
`;

console.log(lorem);
console.log(lorem2);
