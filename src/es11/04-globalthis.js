// diferentes formas de acceder al objeto global
// y a lo que esté almacenado ahí
console.log(window); // navegador
// error porque estamos en node
console.log(global); // node
// funciona
console.log(self); // webworker
// error porque estamos en node
console.log(globalThis); // cualquier tipo de aplicación
// funciona en cualqueira



