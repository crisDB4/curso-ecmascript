// flat-map devuelve una matriz de cualquier submatriz

// flat
// matriz -> arreglos anidados dentro de arreglos
const array = [1,1,2,3,4,[1,3,5,6,[1,2,4]]]; // es de 3 niveles de profundidad
console.log(array.flat(3)); // [1,1,2,3,4,1,3,5,6,1,2,4]

// flatmap
// le aplica una transformación al arreglo
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2])); // [ 1, 2, 2, 4,  3, 6, 4, 8, 5, 10]
