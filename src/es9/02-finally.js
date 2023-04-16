const anotherFunction = () => {
    // una promesa es algo que va a pasar, ¿Cuando?
    // hoy, mañana o nunca
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!');
        } else {
            reject('Whoooops!');
        }
    })
}

anotherFunction()
    // se pueden tener varios .then que hagan algo con lo que se retorna
    .then(response => console.log(response))
    .catch(err => console.log(err))
    // cuando terminó la promise, se puede ejecutar alguna acción conuna función anónima
    .finally(() => console.log('Finally'));