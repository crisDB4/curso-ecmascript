try {
    hello();
} catch (error) {
    console.log(error); // devuele el error
}

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}

// lo mejor es manejar el error, no personalizarlo