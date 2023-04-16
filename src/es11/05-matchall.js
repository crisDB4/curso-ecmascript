// Trabaja con RegEx
/*
con Regex se puede validar que una contraseña 
cumpla un objetivo, numero de caracteres, mayusculas
minusculas, etc.
o validar que en un input si tengamos un correo 
electrónico válido
*/
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana Kiwi, Apple, orange, etc. etc.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
/*
    [
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana Kiwi, Apple, orange, etc. etc.',
    groups: undefined
    ]
    [
    'Apple',
    'Apple',
    index: 20,
    input: 'Apple, Banana Kiwi, Apple, orange, etc. etc.',
    groups: undefined
    ]
*/
// muestra las veces que se repite, el indice, etc...