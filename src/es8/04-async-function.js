const fnAsync = () => {
    return new Promise((resolve, reject) => {
        // if ternario
        (true)
            ? setTimeout(() => resolve('Async!!!'),2000) // esperar 2 segundo
            : reject(new Error('Error!'));
    })
}

// async y await
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!'); // se ejecuta independientemente de lo que pasa en la promesa
}


console.log('Before'); // se imprime de primeras
anotherFn(); // se imprime de ultimo
console.log('After'); // se imprime de segundas